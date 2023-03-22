import React from "react";
import { useDataContext } from "../../Context/DataContext";
import TimeBar, { Jobs } from "../TimeBar/TimeBar";

const Experience = () => {
  const { Experience } = useDataContext();
  const jobs = { jobs: Experience };
  return (
    <>
      <TimeBar title={"Work Experience"} jobs={jobs satisfies Jobs} />
    </>
  );
};

export default Experience;
