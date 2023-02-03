import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Tags from "./Components/Tags/Tags";
import postImage from "../../assets/post.jpg";
import Related from "./Components/Related/Related";
import Share from "./Components/Share/Share";
import NextPrev from "./Components/NextPrev/NextPrev";
const page = () => {
  return (
    <div className={styles.post}>
      {/* TODO: Create a breadcrumb component */}
      <Image className={styles.image} src={postImage} alt="Post main image" />
      <h1>The midday swim</h1>

      <div className={styles.info}>
        <div className={styles.author_date}>
          <div className={styles.author}>by Oguzhan Kandakoglu</div>
          <div>January 31, 2023</div>
        </div>
        <div>NATURE, PEOPLE</div>
      </div>

      <div className={styles.seperator} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in eros
        scelerisque, scelerisque nisl sit amet, molestie erat. In a elementum
        ex. Curabitur id tincidunt justo. Nam dictum lacinia nulla, et tincidunt
        dolor commodo ultricies. Praesent laoreet diam in faucibus iaculis.
        Mauris tincidunt dui tempus velit euismod, et porta nibh gravida.
        Integer luctus leo nulla, nec viverra quam volutpat laoreet. Phasellus
        sed nisi non leo convallis gravida et et felis. Pellentesque quis metus
        ac nulla ornare malesuada pellentesque et risus.
      </p>

      <p>
        In sed consectetur mi, a efficitur dui. Duis ac lacus sem. Aenean eget
        justo malesuada, fringilla turpis eu, placerat erat. Nullam at leo ac
        massa mattis pharetra. Praesent eget risus auctor, feugiat purus
        placerat, iaculis leo. Nam ac molestie nunc, et convallis urna. Ut
        facilisis suscipit eros. Nulla egestas semper purus, sed tincidunt
        libero cursus quis. Donec vel dui vel lorem malesuada posuere non id
        nisi. Fusce sodales ornare lectus, nec efficitur est pellentesque eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className={styles.bottom_wrapper}>
        <div className={styles.tags}>
          <h2>Tags</h2>
          <Tags />
        </div>
        <Share />
      </div>
      <div className={styles.seperator} />
      <NextPrev />
      <div className={styles.seperator} />
      <h2 className={styles.related}>Related Posts</h2>
      <Related />
    </div>
  );
};

export default page;
