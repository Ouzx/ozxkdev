import React from "react";

import { Metadata } from "next";
import PageContent from "./pageContent";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Portfolio",
    description: "My portfolio.",
    openGraph: {
      title: "Portfolio",
      description: "My portfolio.",
      url: `${process.env.NEXT_PUBLIC_URL}/portfolio`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/images/portfolio.jpg`,
          width: 800,
          height: 600,
          alt: "Portfolio",
        },
      ],
      siteName: "ozxk dev blog",
      locale: "en_US",
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
