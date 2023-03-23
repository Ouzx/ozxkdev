"use client";
import LoadIndicator from "@/app/Components/LoadIndicator/LoadIndicator";
import React, { useState } from "react";
import styles from "./Contact.module.scss";

const sendMail = async (data: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API}/contact/send`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    sendMail(data)
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        if (!error) {
          setSuccess(true);
        }
      });
  };
  return (
    <div className={styles.contact}>
      {loading ? (
        <div className={styles.loader}>
          <LoadIndicator />
        </div>
      ) : (
        <>
          {error && !success && (
            <p className={styles.error}>
              There was an error sending your message. Please try again later.
            </p>
          )}
          {success && (
            <p className={styles.success}>
              Your message has been sent successfully. Thank you!
            </p>
          )}
          <form onSubmit={handleSubmit} about="contact">
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" min={2} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" min={2} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols={30} rows={10} />
            </div>
            <div className={styles.formGroup}>
              <button type="submit">Send</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
