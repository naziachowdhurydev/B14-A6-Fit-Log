"use client";
import { IFitData } from "@/types/fitLog.type";
import React, { useContext } from "react";
import { FitLogContext } from "../../context/FitLog.Provider";

type PlanButtonProps = {
  fit: IFitData;
};

const PlanButton = ({ fit }: PlanButtonProps) => {
  const handlePlan = () => {
    console.log("handle plan ", fit);
  };

  const fitLogContext = useContext(FitLogContext) as {
    plan: IFitData[];
    setPlan: React.Dispatch<React.SetStateAction<IFitData[]>>;
  };
  const { plan, setPlan } = fitLogContext;

  setPlan((prevPlan) => [...prevPlan, fit]);
  return (
    <button
      onClick={() => handlePlan()}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#d5ff58] bg-[#d5ff58] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[#081018] shadow-[0_0_24px_rgba(213,255,88,0.24)] transition-transform duration-200 hover:scale-[1.01]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <path d="M7 7h10v10H7z" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M12 3v6M12 15v6M3 12h6M15 12h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Add to today&apos;s plan
    </button>
  );
};

export default PlanButton;
