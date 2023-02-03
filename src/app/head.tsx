import { NextSeo } from "next-seo";
export default function Head() {
  return (
    <>
      <title>Create Next App</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <NextSeo
        useAppDir={true}
        themeColor="#47c9e5"
        titleTemplate="%s | Next SEO"
      />
    </>
  );
}
