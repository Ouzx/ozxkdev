import React, { Suspense } from "react";
import Link from "next/link";
import styles from "./page.module.scss";

import Tags from "./Components/Tags/Tags";

import Related from "./Components/Related/Related";
import Share from "./Components/Share/Share";
import NextPrev from "./Components/NextPrev/NextPrev";

import { ArticleJsonLd } from "next-seo";
import Content from "./Components/Content/Content";
import { PostMain } from "@/types/Post";
import NotFound from "@/app/Components/notFound/NotFound";
import LoadIndicator from "@/app/Components/LoadIndicator/LoadIndicator";

const getPost = async (slug: string, category: string): Promise<PostMain> => {
  return await fetch(process.env.API + `/post/${category}/${slug}`)
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

  if (!postData) {
    return <NotFound message="No post found." />;
  }

  return (
    <Suspense fallback={<LoadIndicator />}>
      <div className={styles.post}>
        <h1>{postData?.post.title}</h1>
        {/* TODO: Change this` */}
        <ArticleJsonLd
          useAppDir={true}
          type="BlogPosting"
          url="https://example.com/blog"
          title="Blog headline"
          images={[
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg",
          ]}
          datePublished="2015-02-05T08:00:00+08:00"
          dateModified="2015-02-05T09:00:00+08:00"
          authorName="Jane Blogs"
          description="This is a mighty good description of this blog."
        />

        <div className={styles.info}>
          <div className={styles.author_date}>
            <div className={styles.author}>{`by ${postData?.post.author}`}</div>
            <div>{new Date(postData?.post.createdAt).toDateString()}</div>
          </div>
          <Link
            href={`/?category=${postData?.post.category}`}
            className={styles.category}
          >
            {postData?.post.category}
          </Link>
        </div>

        <div className={styles.seperator} />

        <div className={styles.content}>
          <Content content={postData?.post.content} />
        </div>

        <div className={styles.bottom_wrapper}>
          <div className={styles.tags}>
            <h2>Tags</h2>
            <Tags tagList={postData?.post.tags} />
          </div>
          <Share />
        </div>
        <div className={styles.seperator} />
        <NextPrev
          nextSlug={postData?.nexPost}
          prevSlug={postData?.prevPost}
          category={postData?.post.category}
        />
        <div className={styles.seperator} />

        <Related posts={postData?.relatedPosts} />
      </div>
    </Suspense>
  );
};

export default page;
