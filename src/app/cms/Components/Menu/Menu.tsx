import { signOut, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import styles from "./Menu.module.scss";
const Menu = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <ul>
          <li>
            <Link href={"/"}>Posts ✍️</Link>
          </li>
          <li>
            <Link href={"/"}>Create Post 📝</Link>
          </li>
          <li>
            <button
              className={styles.signOut}
              onClick={() => {
                signOut();
              }}
            >
              Sign Out 🚪
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Menu;
