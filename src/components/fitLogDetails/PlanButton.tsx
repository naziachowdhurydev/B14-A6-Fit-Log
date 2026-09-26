"use client";
import { IFitData } from "../../types/fitLog.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { FitLogContext } from "../../context/FitLog.Provider";

type PlanButtonProps = {
  fit: IFitData;
};

const PlanButton = ({ fit }: PlanButtonProps) => {
  const { plan, setPlan } = useContext(FitLogContext);
  const alreadyAdded = plan.some((item) => item.id === fit.id);
  const isPlanFull = plan.length >= 5;

  const handlePlan = () => {
    if (alreadyAdded) {
      toast.info(`${fit.name} is already in your plan`);
      return;
    }

    if (isPlanFull) {
      toast.warning(
        "Your today's plan is already full. Remove one to add another.",
      );
      return;
    }

    setPlan((prevPlan) => [...prevPlan, fit]);
    toast.success(`${fit.name} added to today’s plan`);
  };

  return (
    <button
      type="button"
      onClick={handlePlan}
      disabled={alreadyAdded || isPlanFull}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#d5ff58] bg-[#d5ff58] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[#081018] shadow-[0_0_24px_rgba(213,255,88,0.24)] transition-transform duration-200 hover:scale-[1.01] disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-700 disabled:text-slate-400 disabled:shadow-none disabled:hover:scale-100"
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
      {alreadyAdded
        ? "In your plan"
        : isPlanFull
          ? "Plan full"
          : "Add to today&apos;s plan"}
    </button>
  );
};

export default PlanButton;
