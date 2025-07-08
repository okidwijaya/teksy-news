type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>Page</h1>
      <p>{params.id}</p>
    </div>
  );
}
