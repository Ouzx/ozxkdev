import React from "react";
import { useDataContext } from "../../Context/DataContext";
import HR from "../HR/HR";
import Title from "../Title/Title";
import styles from "./Langs.module.scss";
const Langs = () => {
	const { Languages } = useDataContext();
	return (
		<div className={styles.container}>
			<Title title="FREMDSPRACHEN" />
			<HR />
			{Languages?.map((lang, i) => (
				<div
					className={styles.wrapper}
					key={i}
				>
					<p>{lang.title}: </p> <p>{lang.level}</p>
				</div>
			))}
		</div>
	);
};

export default Langs;
