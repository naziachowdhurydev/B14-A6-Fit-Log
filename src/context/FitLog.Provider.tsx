"use client";
import React, { createContext, useState } from "react";

export const FitLogContext = createContext({});

const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState([]);
  const [save, setSave] = useState([]);

  const sharedData = {
    plan,
    setPlan,
    save,
    setSave,
  };

  return (
    <FitLogContext.Provider value={sharedData}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogProvider;
