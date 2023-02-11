"use client";
import React, { useRef } from "react";
import styles from "./page.module.scss";
import { signIn } from "next-auth/react";

const page = () => {
  const userName = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const onClick = async () => {
    const userNameValue = userName.current?.value;
    const passwordValue = password.current?.value;

    if (!userNameValue || !passwordValue) {
      return;
    }

    await signIn("credentials", {
      username: userNameValue,
      password: passwordValue,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className={styles.login}>
      <div className={styles.form_group}>
        <h1>Login</h1>
        {/* TODO: Make it component */}
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={userName} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={password} />
        </div>
        <button onClick={onClick}>Login</button>
      </div>
    </div>
  );
};

export default page;
