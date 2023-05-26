import React from "react";
import styles from "./page.module.scss";
import Contact from "./Components/Form/Contact";

import { NEXT_SEO_DEFAULT } from "@/next-seo.config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
    description: "Contact me for any questions or feedback.",
    openGraph: {
      title: "Contact",
      description: "Contact me for any questions or feedback.",
      url: `${process.env.NEXT_PUBLIC_URL}/contact`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/images/contact.jpg`,
          width: 800,
          height: 600,
          alt: "Contact",
        },
      ],
      siteName: "ozxk dev blog",
      locale: "en_US",
    },
  };
}

const page = () => {
  return (
    <div className={styles.container}>
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
