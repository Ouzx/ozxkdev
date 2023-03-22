import React from "react";
import TimeCard from "../TimeCard/TimeCard";

interface Job {
  title?: string;
  company?: string;
  date?: string;
  description?: string;
}

export interface Jobs {
  jobs?: Job[];
}

interface TimeBarProps {
  title: string;
  jobs?: Jobs;
}

const TimeBar = ({ title, jobs }: TimeBarProps) => {
  return (
    <>
      <h3>{title}</h3>
      {jobs?.jobs?.map((job, index) => (
        <TimeCard
          key={index + "timecard" + title}
          title={job?.title}
          company={job?.company}
          date={job?.date}
          description={job?.description}
        />
      ))}
    </>
  );
};

export default TimeBar;
