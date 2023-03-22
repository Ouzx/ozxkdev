"use client";
import React, { useState, useEffect, useContext } from "react";
import { Resume } from "@/types/Resume";

const DataContext = React.createContext({} as Resume);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Resume>({} as Resume);
  useEffect(() => {
    fetch("@/assets/resume.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);
