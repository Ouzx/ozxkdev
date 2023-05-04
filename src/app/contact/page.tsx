import React from "react";
import styles from "./page.module.scss";
import Contact from "./Components/Form/Contact";

import { NextSeo, NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "@/next-seo.config";

const page = () => {
  const meta = JSON.parse(JSON.stringify(NEXT_SEO_DEFAULT)) as NextSeoProps;

  if (meta) {
    meta.title = "Contact";
    meta.description = "Contact me for any questions or feedback.";
    if (meta.openGraph) {
      meta.openGraph.title = "Projects";
      meta.openGraph.description = "Contact me for any questions or feedback.";
      meta.openGraph.url = `${process.env.NEXT_PUBLIC_URL}/contact`;
    }
  }

  const updateMeta: NextSeoProps = meta;
  return (
    <div className={styles.container}>
      <NextSeo {...updateMeta} useAppDir={true} />
      <h2>Contact</h2>
      <p>
        Thank you for visiting my website! I would love to hear from you.
        Whether you have questions, feedback, or just want to say hello, don't
        hesitate to reach out. You can email me at
        <a rel="noopener noreferrer" href="mailto:oguzhankandakoglu@gmail.com">
          oguzhankandakoglu@gmail.com
        </a>
        and I'll get back to you as soon as possible. I appreciate your interest
        in my work and I look forward to connecting with you soon.
        <br />
        Also you send me a message via the form below.
      </p>
      <Contact />
    </div>
  );
};

export default page;
