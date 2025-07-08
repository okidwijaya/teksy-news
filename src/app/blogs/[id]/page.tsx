import React from "react";

type MyPageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: MyPageProps) {
  return (
    <div>
      <h1>Page</h1>
      <p>{params.id}</p>
    </div>
  );
}
