import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
const Menu = () => {
  const { data: session } = useSession();
  console.log({ session });
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
            <Link href={"/"}>Sign Out 🚪</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Menu;
