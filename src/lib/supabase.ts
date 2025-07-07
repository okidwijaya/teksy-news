import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://roocnpvdpaqbtljihsfu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvb2NucHZkcGFxYnRsamloc2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3NzA4MDIsImV4cCI6MjA2NzM0NjgwMn0.G5A8PcHBgOOZp_vUQPIn-_yGnuR20gH7CJavNnt5mxs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://roocnpvdpaqbtljihsfu.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)