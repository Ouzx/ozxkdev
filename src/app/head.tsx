import { NextSeo } from "next-seo";
export default function Head() {
  return (
    <>
      <title>ozxk's Code Chronicles: A Dev Log</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Get an inside look at the world of software development through ozxk's eyes"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <NextSeo
        useAppDir={true}
        themeColor="#47c9e5"
        titleTemplate="%s | Ozxk Dev"
      />
    </>
  );
}
