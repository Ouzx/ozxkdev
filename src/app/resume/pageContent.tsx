"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";

import { DataProvider } from "./Context/DataContext";

import heroBG from "@/assets/hero-bg.svg";
import HR from "./Components/HR/HR";

import Profile from "./Components/Profile/Profile";
import Contact from "./Components/Contact/Contact";
import Badges from "./Components/Badges/Badges";
import Hello from "./Components/Hello/Hello";

import ExButtons from "./Components/Fixed/ExButtons";
import Experience from "./Components/Fixed/Experience";
import Education from "./Components/Fixed/Education";
import Certifications from "./Components/Fixed/Certifications";
import Langs from "./Components/Langs/Langs";
import Projects from "./Components/Projects/Projects";

import "./print.css";

const pageContent = () => {
	return (
		<DataProvider>
			<div
				className={styles.container}
				id="pageP"
			>
				<Image
					src={heroBG}
					alt=""
					className={styles.bg}
				/>
				<div className={styles.content}>
					<div className={styles.side}>
						<div className={styles.row}>
							<Profile />
						</div>

						<div className={styles.row}>
							<Contact />
						</div>

						<div className={`${styles.row} `}>
							<Langs />
						</div>

						<div
							className={`${styles.row} ${styles.page_break}`}
							style={{ marginTop: "2.2rem" }}
						>
							<Badges />
						</div>

						<div className={`${styles.row} ${styles.buttons}`}>
							<ExButtons />
						</div>
					</div>

					<div className={styles.main}>
						<Hello />
						<HR />
						<Experience />
						<HR />
						<Education />
						<HR />
						{/* <div className={styles.printSpacer}></div> */}
						<Certifications />
						<HR />
						{/* <div className={styles.printSpacer10}></div>*/}
						{/* <div className={styles.printSpacer}></div> */}
						<div className={styles.page_break}></div>
						<Projects />
					</div>
				</div>
			</div>
		</DataProvider>
	);
};

export default pageContent;
