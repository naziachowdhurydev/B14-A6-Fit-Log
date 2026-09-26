import React from "react";
export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0b1116] px-5 py-3 text-sm font-medium text-slate-200 shadow-[0_14px_28px_rgba(0,0,0,0.18)]">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#d5ff58] border-t-transparent" />
        Loading workouts...
      </div>
    </div>
  );
}
