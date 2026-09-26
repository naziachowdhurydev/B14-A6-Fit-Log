"use client";
import { IFitData } from "@/types/fitLog.type";
import React, { createContext, useState } from "react";

type FitLogContextType = {
  plan: IFitData[];
  setPlan: React.Dispatch<React.SetStateAction<IFitData[]>>;
  save: IFitData[];
  setSave: React.Dispatch<React.SetStateAction<IFitData[]>>;
};

export const FitLogContext = createContext<FitLogContextType>({
  plan: [],
  setPlan: () => undefined,
  save: [],
  setSave: () => undefined,
});

const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<IFitData[]>([]);
  const [save, setSave] = useState<IFitData[]>([]);

  const sharedData: FitLogContextType = {
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
