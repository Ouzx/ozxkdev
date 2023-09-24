import React from "react";
import styles from "./Title.module.scss";
const Title = ({ title }: { title: string }) => {
	return <p className={styles.info}>{title}</p>;
};

export default Title;
