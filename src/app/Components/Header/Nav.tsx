import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <ul>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>Projects</li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link href={"https://ozxk.dev"} target="_blank">
          Portfolio
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
