import React from "react";

const Revalidator = () => {
  const revalidate = () => {
    fetch(`/api/revalidate?secret=${process.env.REVALIDATE_TOKEN}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  revalidate();
  return null;
};

export default Revalidator;
