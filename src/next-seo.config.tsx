// next-seo.config.ts
import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: "ozxk's Adventures in Code",
  description:
    "Get an inside look at the world of software development through ozxk's eyes",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://ozxk.dev",
    title:
      "ozxk's Adventures in Code - Exploring the World of Software Development",
    description:
      "Get an inside look at the world of software development through ozxk's eyes",
    images: [
      {
        url: "https://ozxk.dev/og-image.png",
        width: 800,
        height: 600,
        alt: "ozxk's Dev Blog header image",
        type: "image/jpeg",
        secureUrl: "https://ozxk.dev/og-image.png",
      },
    ],
    siteName: "ozxk's Adventures in Code",
  },
  twitter: {
    handle: "@ozxkdev",
    site: "@ozxkdev",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "keywords",
      content: "software development, code, ozxk, blog",
    },
  ],
};
