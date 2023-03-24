import React, { Suspense } from "react";
import Link from "next/link";
import styles from "./page.module.scss";

import Tags from "./Components/Tags/Tags";

import Related from "./Components/Related/Related";
import Share from "./Components/Share/Share";
import NextPrev from "./Components/NextPrev/NextPrev";

import { ArticleJsonLd } from "next-seo";
import { NextSeo, NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "@/next-seo.config";

import Content from "./Components/Content/Content";
import { PostMain } from "@/types/Post";
import { notFound } from "next/navigation";
import LoadIndicator from "@/app/Components/LoadIndicator/LoadIndicator";
import ScrollTop from "@/Components/ScrollTop";

const getPost = async (slug: string, category: string): Promise<PostMain> => {
  return await fetch(process.env.API + `/post/${category}/${slug}`, {
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

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
  const meta = JSON.parse(JSON.stringify(NEXT_SEO_DEFAULT));
  meta.title = postData?.post?.title;
  meta.description = postData?.post?.shortContent;
  meta.titleTemplate = `%s | ${postData?.post?.category} | ozxk dev blog`;
  const updateMeta: NextSeoProps = meta;

  // get url
  const url = `${process.env.NEXT_PUBLIC_URL}/${category}/${slug}`;
  return (
    <Suspense fallback={<LoadIndicator />}>
      <ScrollTop />
      <NextSeo {...updateMeta} useAppDir={true} />
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
          nextSlug={postData?.nexPost}
          prevSlug={postData?.prevPost}
          category={postData?.post?.category}
        />
        <div className={styles.seperator} />

        <Related posts={postData?.relatedPosts} />
      </div>
    </Suspense>
  );
};

export default page;
