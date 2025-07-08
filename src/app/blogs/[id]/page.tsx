export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Page</h1>
      <p>{params.id}</p>
    </div>
  );
}
