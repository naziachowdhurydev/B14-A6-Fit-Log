"use client";

import { IFitData } from "@/types/fitLog.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { FitLogContext } from "../../context/FitLog.Provider";

type SaveButtonProps = {
  fit: IFitData;
};

const SaveButton = ({ fit }: SaveButtonProps) => {
  const { save, setSave } = useContext(FitLogContext);
  const handleSave = () => {
    const alreadySaved = save.some((item) => item.id === fit.id);

    if (alreadySaved) {
      toast.info(`${fit.name} is already saved`);
      return;
    }

    setSave((prevSave) => [...prevSave, fit]);

    toast.success(`${fit.name} saved for later`);
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/5"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <path
          d="M6 4.5A2.5 2.5 0 0 1 8.5 2H15a3 3 0 0 1 3 3v15l-6-4-6 4V7.5A3 3 0 0 1 6 4.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Save for later
    </button>
  );
};

export default SaveButton;
