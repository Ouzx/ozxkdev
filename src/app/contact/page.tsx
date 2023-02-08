import React from "react";
import styles from "./page.module.scss";
import Contact from "./Components/Form/Contact";
const page = () => {
  return (
    <div className={styles.container}>
      <h2>Contact</h2>
      <p>
        Thank you for visiting my website! I would love to hear from you.
        Whether you have questions, feedback, or just want to say hello, don't
        hesitate to reach out. You can email me at
        <a href="mailto:oguzhankandakoglu@gmail.com">
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
