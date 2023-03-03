import { NextSeo, NextSeoProps } from "next-seo";

import { NEXT_SEO_DEFAULT } from "@/next-seo.config";

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "Example Page",
    description: "This is an example page",
    titleTemplate: "%s",
  };
  return (
    <>
      <NextSeo {...updateMeta} useAppDir={true} />
    </>
  );
}
