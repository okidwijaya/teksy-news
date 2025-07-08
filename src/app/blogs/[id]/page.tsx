import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Blog ${params.id}`,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Blog Detail</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}
