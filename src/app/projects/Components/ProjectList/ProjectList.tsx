"use client";
import React, { use } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { iProjects } from "@/types/Projects";

const getProjects = async (): Promise<iProjects | null> => {
  try {
    const projects = await fetch("projects.json");
    const projectList = (await projects.json()) as iProjects;
    return projectList;
  } catch (e) {
    return null;
  }
};

const ProjectList = () => {
  const projects = use(getProjects());
  return (
    <>
      {projects?.projects.map((project, i) => {
        return <ProjectCard {...project} key={`project#${i}`} />;
      })}
    </>
  );
};

export default ProjectList;
