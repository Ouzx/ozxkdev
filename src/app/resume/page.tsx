import React from "react";

import { Metadata } from "next";
import PageContent from "./pageContent";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resume",
    description: "My Resume.",
    openGraph: {
      title: "Resume",
      description: "My resume.",
      url: `${process.env.NEXT_PUBLIC_URL}/resume`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/og-image.png`,
          width: 800,
          height: 600,
          alt: "Resume",
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
