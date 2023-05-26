import React from "react";

import PageContent from "./PageContent";
import { Metadata } from "next";

interface Props {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const pageNumber = searchParams.page ? searchParams.page : 1;
  const term = searchParams.term ? searchParams.term : "";

  return {
    title: `Search results for "${term}"`,
    description: `Search results for "${term}"`,
    openGraph: {
      title: `Search results for "${term}"`,
      description: `Search results for "${term}"`,
      url: `${process.env.NEXT_PUBLIC_URL}/search?term=${term}&page=${pageNumber}`,
    },
  };
}

const page = () => {
  return (
    <>
      <PageContent />
    </>
  );
};

export default page;
