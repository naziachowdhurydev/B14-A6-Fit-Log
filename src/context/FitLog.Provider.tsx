"use client";
import { IFitData } from "../types/fitLog.type";
import React, { createContext, useEffect, useState } from "react";

type FitLogContextType = {
  plan: IFitData[];
  setPlan: React.Dispatch<React.SetStateAction<IFitData[]>>;
  save: IFitData[];
  setSave: React.Dispatch<React.SetStateAction<IFitData[]>>;
};

const STORAGE_KEYS = {
  plan: "fitlog-plan",
  save: "fitlog-save",
};

const readStoredItems = (key: string): IFitData[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as IFitData[]) : [];
  } catch {
    return [];
  }
};

export const FitLogContext = createContext<FitLogContextType>({
  plan: [],
  setPlan: () => undefined,
  save: [],
  setSave: () => undefined,
});

const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<IFitData[]>(() =>
    readStoredItems(STORAGE_KEYS.plan),
  );
  const [save, setSave] = useState<IFitData[]>(() =>
    readStoredItems(STORAGE_KEYS.save),
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.plan, JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.save, JSON.stringify(save));
  }, [save]);

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
