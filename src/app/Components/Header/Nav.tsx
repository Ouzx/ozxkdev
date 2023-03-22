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
        <Link href={"/portfolio"}>Portfolio</Link>
      </li>
    </ul>
  );
};

export default Nav;
