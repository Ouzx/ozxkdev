import React from "react";
import ExButton from "../ExButton/ExButton";
import { AiOutlineDownload, AiOutlineGithub } from "react-icons/ai";
import { useDataContext } from "../../Context/DataContext";

const ExButtons = () => {
	const { ResumeFileName } = useDataContext();
	return (
		<>
			<ExButton
				text="Projekt-Repos"
				link="https://github.com/Ouzx/ozxkdev"
			>
				<AiOutlineGithub />
			</ExButton>
			<ExButton
				text="Download Lebenslauf"
				link={ResumeFileName}
			>
				<AiOutlineDownload />
			</ExButton>
		</>
	);
};

export default ExButtons;
