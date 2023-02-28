import React, { use, Suspense } from "react";
import Link from "next/link";
import styles from "./page.module.scss";

import Image from "next/image";
import Tags from "./Components/Tags/Tags";

import Related from "./Components/Related/Related";
import Share from "./Components/Share/Share";
import NextPrev from "./Components/NextPrev/NextPrev";

import { ArticleJsonLd } from "next-seo";
import { post as postx } from "@/lib/general";

const page = ({ params }: { params: { category: string; slug: string } }) => {
  const { category, slug } = params;
  const postData = use(postx(slug, category));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.post}>
        <Image
          className={styles.image}
          src={postData?.post.thumbnail}
          width={1200}
          height={1200}
          alt="Post main image"
        />
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

        {/* <div
          dangerouslySetInnerHTML={
            {
              __html: postData?.post.content,
            } as any
          }
          className={styles.content}
        ></div> */}

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
