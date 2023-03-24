import React from "react";

const Revalidator = () => {
  const revalidate = () => {
    if (!process.env.REVALIDATE_TOKEN) return;
    const link = `${process.env.NEXT_PUBLIC_URL}/api/revalidate?secret=${process.env.REVALIDATE_TOKEN}`;

    fetch(link).catch((err) => {
      console.log(err);
    });
  };
  revalidate();
  return null;
};

export default Revalidator;
