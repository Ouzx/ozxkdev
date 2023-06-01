import React, { Suspense } from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import "./inlineCode.scss";

import Tags from "./Components/Tags/Tags";

import Related from "./Components/Related/Related";
import Share from "./Components/Share/Share";
import NextPrev from "./Components/NextPrev/NextPrev";

import { ArticleJsonLd } from "next-seo";

import Content from "./Components/Content/Content";
import { PostMain } from "@/types/Post";
import { notFound } from "next/navigation";
import LoadIndicator from "@/app/Components/LoadIndicator/LoadIndicator";
import ScrollTop from "@/Components/ScrollTop";
import { Metadata } from "next";

const getPost = async (slug: string, category: string): Promise<PostMain> => {
  return await fetch(process.env.API + `/post/${category}/${slug}`, {
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

function calculateEstimatedTime(content: string) {
  const wordsPerMinute = 200; // Average reading speed in words per minute
  const words = content.split(" ").length;
  const estimatedTime = Math.ceil(words / wordsPerMinute);

  return estimatedTime;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const { category, slug } = params;
  const postData = await getPost(slug, category);

  return {
    title: postData?.post?.title,
    description: postData?.post?.shortContent,
    openGraph: {
      title: postData?.post?.title,
      description: postData?.post?.shortContent,
      url: `${process.env.NEXT_PUBLIC_URL}/post/${category}/${slug}`,
      images: [
        {
          url: postData?.post?.thumbnail,
          width: 800,
          height: 600,
          alt: postData?.post?.title,
        },
      ],
      siteName: "ozxk dev blog",
      locale: "en_US",
      duration: calculateEstimatedTime(postData?.post?.content),
    },
    twitter: {
      card: "summary_large_image",
      site: "@Ozx_K",
      title: postData?.post?.title,
      description: postData?.post?.shortContent,
      images: [
        {
          url: postData?.post?.thumbnail,
          width: 800,
          height: 600,
          alt: postData?.post?.title,
        },
      ],
    },
  };
}

const page = async ({
  params,
}: {
  params: { category: string; slug: string };
}) => {
  const { category, slug } = params;
  const postData = await getPost(slug, category);

  if (!postData || !postData?.post) {
    notFound();
  }

  // get url
  const url = `${process.env.NEXT_PUBLIC_URL}/post/${category}/${slug}`;
  return (
    <Suspense fallback={<LoadIndicator />}>
      <ScrollTop />
      <div className={styles.post}>
        <h1>{postData?.post?.title}</h1>
        <ArticleJsonLd
          useAppDir={true}
          type="BlogPosting"
          url={url}
          title={postData?.post?.title}
          images={[postData?.post?.thumbnail]}
          datePublished={postData?.post?.createdAt}
          authorName={postData?.post?.author}
          description={postData?.post?.shortContent}
        />

        <div className={styles.info}>
          <div className={styles.author_date}>
            <div
              className={styles.author}
            >{`by ${postData?.post?.author}`}</div>
            <div>{new Date(postData?.post?.createdAt).toDateString()}</div>
          </div>
          <Link
            href={`/?category=${postData?.post?.category}`}
            className={styles.category}
          >
            {postData?.post?.category}
          </Link>
        </div>

        <div className={styles.seperator} />

        <div className={styles.content}>
          <Content content={postData?.post?.content} />
        </div>

        <div className={styles.bottom_wrapper}>
          <div className={styles.tags}>
            <h2>Tags</h2>
            <Tags tagList={postData?.post?.tags} />
          </div>
          <Share url={url} title={postData?.post?.title} />
        </div>
        <div className={styles.seperator} />
        <NextPrev
          nextPost={postData?.nextPost}
          prevPost={postData?.previousPost}
        />
        <div className={styles.seperator} />

        <Related posts={postData?.relatedPosts} />
      </div>
    </Suspense>
  );
};

export default page;
