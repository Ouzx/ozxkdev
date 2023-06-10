import React from "react";
import Section from "./Section";

const Badges = () => {
  return (
    <>
      <Section title={"Frontend"} start={0} end={10} />
      <Section title={"Backend"} start={10} end={20} />
      <Section title={"Others"} start={20} end={40} />
    </>
  );
};

export default Badges;
