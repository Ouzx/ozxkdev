"use client";
import React from "react";
import { useDataContext } from "../../Context/DataContext";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
	const { ProjectList } = useDataContext();
	return (
		<>
			<h3>Projekte</h3>
			{ProjectList?.map((project, index) => (
				<ProjectCard
					key={index + project.title}
					title={project.title}
					description={project.description}
					image={project.img}
					link={project.link}
					linkType={project.linkType}
				/>
			))}
		</>
	);
};

export default Projects;
