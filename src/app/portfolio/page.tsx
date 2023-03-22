import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";

import { AiOutlineDownload, AiOutlineGithub } from "react-icons/ai";

import heroBG from "@/assets/hero-bg.svg";
import pp from "@/assets/PP.png";

const badges = [
  <img
    src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff"
    alt="HTML5"
    key="HTML5"
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&logo=css3"
    alt="CSS3"
    key="CSS3"
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
    alt="JavaScript"
    key={"JavaScript"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"
    alt="TypeScript"
    key="TypeScript"
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-React-%23282C34?style=flat-square&logo=react"
    alt="React"
    key="React"
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-React%20Native-%2320232a?style=flat-square&logo=react&logoColor=61dbfb"
    alt="ReactNative"
    key={"ReactNative"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat-square&logo=sass&logoColor=ffffff"
    alt="Sass"
    key="Sass"
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-TailwindCss-%231a202c?style=flat-square&logo=tailwind-css"
    alt="TailwindCss"
    key={"TailwindCss"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Redux-%23764ABC?style=flat-square&logo=redux&logoColor=ffffff"
    alt="Redux"
    key="Redux"
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-ESLint-%234B32C3?style=flat-square&logo=eslint"
    alt="ESlint"
    key={"ESlint"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Node.js-%2343853D?style=flat-square&logo=node.js&logoColor=ffffff"
    alt="Node.js"
    key={"Node.js"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Express.js-%23006400?style=flat-square&logo=express&logoColor=ffffff"
    alt="Express.js"
    key={"Express.js"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Flask-%23000?style=flat-square&logo=flask&logoColor=ffffff"
    alt="Flask"
    key={"Flask"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Vite-%2361F7CF?style=flat-square&logo=vite&logoColor=000"
    alt="Vite"
    key={"Vite"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Next.js-%23000000?style=flat-square&logo=next.js&logoColor=ffffff"
    alt="Next.js"
    key={"Next.js"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-MongoDB-%2347A248?style=flat-square&logo=mongodb&logoColor=ffffff"
    alt="MongoDB"
    key={"MongoDB"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-MySQL-%234479A1?style=flat-square&logo=mysql&logoColor=ffffff"
    alt="MySQL"
    key={"MySQL"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-SQLite-%23005A9C?style=flat-square&logo=sqlite&logoColor=ffffff"
    alt="SQLite"
    key={"SQLite"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-OracleDB-%23E85D00?style=flat-square&logo=oracledb&logoColor=ffffff"
    alt="OracleDB"
    key={"OracleDB"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Netlify-%2300C7B7?style=flat-square&logo=netlify&logoColor=ffffff"
    alt="Netlify"
    key={"Netlify"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Vercel-%23ffffff?style=flat-square&logo=vercel&logoColor=000000"
    alt="Vercel"
    key={"Vercel"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Heroku-%23430098?style=flat-square&logo=heroku&logoColor=ffffff"
    alt="Heroku"
    key={"Heroku"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Render.com-%230070BA?style=flat-square&logo=render&logoColor=ffffff."
    alt="Render"
    key={"Render"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-GitHub%20Actions-%23181717?style=flat-square&logo=github&logoColor=ffffff"
    alt="GithubActions"
    key={"GithubActions"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-GitHub-%23181717?style=flat-square&logo=github&logoColor=ffffff"
    alt="Github"
    key={"Github"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Git-%23F05032?style=flat-square&logo=git&logoColor=%23ffffff"
    alt="Git"
    key={"Git"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Azure-%234B83AF?style=flat-square&logo=azure&logoColor=ffffff"
    alt="Azure"
    key={"Azure"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Linux-%23FCC624?style=flat-square&logo=linux&logoColor=000"
    alt="Linux"
    key={"Linux"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-.NET-%230078D7?style=flat-square&logo=.net&logoColor=ffffff"
    alt=".NET"
    key={".NET"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Bash-%230078D4?style=flat-square&logo=bash&logoColor=ffffff"
    alt="Bash"
    key={"Bash"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-C%23-%23178600?style=flat-square&logo=c-sharp&logoColor=ffffff"
    alt="CSharp"
    key={"CSharp"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Python-%2314354C?style=flat-square&logo=python&logoColor=ffffff"
    alt="Python"
    key={"Python"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Java-%23ED8B00?style=flat-square&logo=java&logoColor=ffffff"
    alt="Java"
    key={"Java"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Selenium-%232FA44F?style=flat-square&logo=selenium&logoColor=ffffff"
    alt="Selenium"
    key={"Selenium"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Jest-%23C21325?style=flat-square&logo=jest&logoColor=ffffff"
    alt="Jest"
    key={"Jest"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Cucumber-%23004880?style=flat-square&logo=cucumber&logoColor=ffffff"
    alt="Cucumber"
    key={"Cucumber"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-PyTest-%230F7017?style=flat-square&logo=pytest&logoColor=ffffff"
    alt="Pytest"
    key={"Pytest"}
    className={styles.tagStyle}
  />,
  <img
    src="https://img.shields.io/badge/-Visual%20Studio%20Code-%23007ACC?style=flat-square&logo=visual-studio-code&logoColor=ffffff"
    alt="VSCode"
    key={"VSCode"}
    className={styles.tagStyle}
  />,
];

const page = () => {
  return (
    <div className={styles.container}>
      <Image src={heroBG} alt="" className={styles.bg} />
      <div className={styles.content}>
        <div className={styles.side}>
          <div className={`${styles.row} ${styles.hero}`}>
            <Image className={styles.pp} src={pp} alt="" />
            <p className={styles.name}>Oğuzhan Kandakoğlu</p>
            <p className={styles.role}>Full Stack Developer</p>
          </div>

          <div className={styles.row}>
            <div className={styles.contact}>
              <p className={styles.info}>INFO</p>
              <div className={styles.seperator}></div>
              <div className={styles.line}>
                <p>Date of Birth</p>
                <p>11 - 24 - 1999</p>
              </div>
              <div className={styles.line}>
                <p>Location</p>
                <p>Ankara / Turkey</p>
              </div>
              <a
                href="mailto:oguzhankandakoglu@gmail.com"
                className={styles.line}
              >
                <p>E-mail</p>
                <p>oguzhankandakoglu@gmail.com</p>
              </a>
              <a href="tel:+90546488984" className={styles.line}>
                <p>Phone</p>
                <p>(+90)-546-488-9884</p>
              </a>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.techStack}>
              <p className={styles.info}>Frontend</p>
              <div className={styles.seperator}></div>
              <div className={styles.tags}>
                {badges.slice(0, 10).map((badge) => {
                  return badge;
                })}
              </div>
              <p className={styles.info}>Backend</p>
              <div className={styles.seperator}></div>
              <div className={styles.tags}>
                {badges.slice(10, 19).map((badge) => {
                  return badge;
                })}
              </div>
              <p className={styles.info}>Others</p>
              <div className={styles.seperator}></div>
              <div className={styles.tags}>
                {badges.slice(19, 40).map((badge) => {
                  return badge;
                })}
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <a className={styles.button} href="#">
              <button>
                <span>Project Repo</span> <AiOutlineDownload />
              </button>
            </a>
            <a className={styles.button} href="#">
              <button>
                <span>Download Resume</span> <AiOutlineGithub />
              </button>
            </a>
          </div>
        </div>

        <div className={styles.main}>
          <h1>
            Hello, I'm <span className={styles.name}>Oğuz</span>
          </h1>
          <p className={styles.hello}>
            I am a recent graduate with a strong background in full stack web
            development. Proficient in a variety of technologies including
            JavaScript, React, Node.js and experienced in developing web
            applications with a focus on user experience. Strong problem-solving
            skills and ability to work in a team environment.
          </p>
          <div className={styles.seperator}></div>
        </div>
      </div>
    </div>
  );
};

export default page;
