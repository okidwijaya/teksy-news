const fs = require('fs');
const path = require('path');

function findFiles(dir, exts = ['.tsx', '.html']){
  const results = [];
  const items = fs.readdirSync(dir);
  for(const item of items){
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if(stat.isDirectory()){
      results.push(...findFiles(full, exts));
    } else if(exts.includes(path.extname(full))){
      results.push(full);
    }
  }
  return results;
}

function validateFile(file){
  const content = fs.readFileSync(file,'utf8');
  const hasScriptTag = content.includes('<script') && content.includes('application/ld+json');
  const hasContextLiteral = content.includes("'@context'") || content.includes('"@context"');
  if(!hasScriptTag && !hasContextLiteral) return {file, ok:false, reason:'no-jsonld-found'};

  // If the file contains a literal <script>...</script> with JSON inside, try to extract and parse it.
  const match = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/);
  if(match){
    try{
      const json = JSON.parse(match[1]);
      if(!json['@context'] || !json['@type']) return {file, ok:false, reason:'missing-@context-or-@type'};
      return {file, ok:true, type: json['@type'], context: json['@context']};
    } catch(e){
      return {file, ok:false, reason:'invalid-json', error: e.message};
    }
  }

  // Handle React-style dynamic JSON-LD where JSON is inserted via JSON.stringify inside dangerouslySetInnerHTML
  if(content.includes('JSON.stringify') || content.includes('dangerouslySetInnerHTML')){
    // crude check for @context presence near JSON.stringify
    if(hasContextLiteral) return {file, ok:true, type:'dynamic', context:'detected'};
    return {file, ok:false, reason:'jsonld-dynamic-without-context'};
  }

  return {file, ok:false, reason:'jsonld-not-extractable'};
}

function main(){
  const root = path.resolve(process.cwd(), 'src');
  if(!fs.existsSync(root)){
    console.error('src directory not found');
    process.exit(2);
  }
  const files = findFiles(root, ['.tsx', '.html']);
  const results = files.map(validateFile);
  const okCount = results.filter(r=>r.ok).length;
  console.log(`Checked ${results.length} files — ${okCount} valid JSON-LD found.`);
  const bad = results.filter(r=>!r.ok);
  if(bad.length>0){
    console.log('Files with issues:');
    bad.forEach(b=>console.log(` - ${b.file}: ${b.reason}${b.error? ' - '+b.error:''}`));
    process.exit(1);
  }
}

if(require.main === module) main();
