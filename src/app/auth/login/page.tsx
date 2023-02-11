"use client";
import React, { useRef } from "react";
import styles from "./page.module.scss";
import { signIn } from "next-auth/react";
import TextBox from "./Components/TextBox/TextBox";
const page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
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
      callbackUrl: "/cms",
    });
  };

  return (
    <div className={styles.login}>
      <form
        className={styles.form_group}
        onSubmit={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        <h1>Login</h1>
        {(searchParams?.message || searchParams?.error) && (
          <p className={styles.error}>
            {searchParams?.message || "Invalid username or password"}
          </p>
        )}
        {/* TODO: Make it component */}
        <TextBox id="username" type="text" ref={userName} label="Username" />
        <TextBox
          id="password"
          type="password"
          ref={password}
          label="Password"
          onOff
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default page;
