"use client";

import { IFitData } from "@/types/fitLog.type";
import { FitLogContext } from "../../context/FitLog.Provider";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";

const MyPlan = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") === "saved" ? "saved" : "plan";
  const { plan, save, setPlan, setSave } = useContext(FitLogContext);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const currentWorkouts = activeTab === "saved" ? save : plan;

  const sortedWorkouts = useMemo(() => {
    const items = [...currentWorkouts];

    if (sortBy === "duration") {
      return items.sort((a, b) => b.duration - a.duration);
    }

    if (sortBy === "calories") {
      return items.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    return items.sort((a, b) => b.rating - a.rating);
  }, [currentWorkouts, sortBy]);

  const handleViewDetails = (item: IFitData) => {
    toast.info(`Viewing ${item.name}`);
  };

  const handleMarkDone = (item: IFitData) => {
    if (activeTab === "plan") {
      setPlan((prev) => prev.filter((workout) => workout.id !== item.id));

      toast.success(`${item.name} marked as done`);
      return;
    }

    toast.success(`${item.name} removed from saved`);
  };

  const handleRemove = (item: IFitData) => {
    if (activeTab === "plan") {
      setPlan((prev) => prev.filter((workout) => workout.id !== item.id));
      toast.warning(`${item.name} removed from today's plan`);
      return;
    }

    setSave((prev) => prev.filter((workout) => workout.id !== item.id));
    toast.warning(`${item.name} removed from saved`);
  };

  const stats = [
    { label: "Exercises", value: String(currentWorkouts.length) },
    {
      label: "Minutes",
      value: String(
        currentWorkouts.reduce(
          (total: number, item: IFitData) => total + item.duration,
          0,
        ),
      ),
    },
    {
      label: "Calories",
      value: String(
        currentWorkouts.reduce(
          (total: number, item: IFitData) => total + item.caloriesBurned,
          0,
        ),
      ),
    },
  ];

  return (
    <main className="min-h-screen px-4 py-5 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-380">
        <h1 className="text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-[3rem] lg:text-[4rem]">
          MY PLAN
        </h1>

        <p className="mt-2 text-base text-slate-300">
          {activeTab === "saved"
            ? "Your saved lifts are waiting for later."
            : "Cap of five lifts for today. Finish them, then load more."}
        </p>

        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0b1116] p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-4 sm:px-6 sm:py-5">
                <p className="text-sm uppercase tracking-[0.04em] text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-black text-white sm:text-5xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2 rounded-full border border-white/10 bg-transparent p-1">
              <Link
                href="/myPlan?tab=plan"
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeTab === "plan"
                    ? "bg-[#d5ff58] text-[#071018]"
                    : "text-slate-300 hover:text-white",
                ].join(" ")}
              >
                Today&apos;s Plan
              </Link>

              <Link
                href="/myPlan?tab=saved"
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeTab === "saved"
                    ? "bg-[#d5ff58] text-[#071018]"
                    : "text-slate-300 hover:text-white",
                ].join(" ")}
              >
                Saved
              </Link>
            </div>

            <div className="relative w-full sm:w-auto">
              <label className="sr-only">Sort workouts</label>
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as typeof sortBy)
                }
                className="w-full appearance-none rounded-full border border-white/10 bg-transparent px-4 py-2 pr-9 text-sm text-slate-300 outline-none transition-colors focus:border-white/20 sm:min-w-45"
              >
                <option value="duration" className="bg-[#0b1116] text-white">
                  Duration
                </option>
                <option value="calories" className="bg-[#0b1116] text-white">
                  Calories
                </option>
                <option value="rating" className="bg-[#0b1116] text-white">
                  Rating
                </option>
              </select>

              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300"
              >
                <path
                  d="M5 7.5 10 12.5l5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {currentWorkouts.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-white/10 bg-[#081018] px-4 py-10 text-center">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                NOTHING HERE YET
              </h2>
              <p className="mt-3 text-base text-slate-300">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#d5ff58] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[#071018] shadow-[0_0_24px_rgba(213,255,88,0.24)]"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {sortedWorkouts.map((item: IFitData) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-[22px] border border-white/10 bg-[#0b1116] p-3 shadow-[0_14px_28px_rgba(0,0,0,0.18)] md:flex-row md:items-center"
                >
                  <div className="relative h-28 w-full overflow-hidden rounded-xl md:h-32 md:w-52">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {item.muscleGroups.map((group, index) => (
                          <span
                            key={`${group}-${index}`}
                            className="rounded-full bg-[#d5ff58] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#081018]"
                          >
                            {group}
                          </span>
                        ))}
                      </div>

                      <h3 className="mt-2 text-2xl font-black uppercase tracking-tighter text-white">
                        {item.name}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-4 w-4"
                          >
                            <circle cx="12" cy="12" r="8" />
                            <path
                              d="M12 7v5l3 2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item.duration} min
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-4 w-4"
                          >
                            <path
                              d="M12 2.75c2.39 2.58 4.5 4.63 4.5 8.07 0 2.38-1.57 4.93-4.5 6.68-2.93-1.75-4.5-4.3-4.5-6.68 0-3.44 2.11-5.49 4.5-8.07Z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 9.5c.8 1.15 1.25 2.1 1.25 3.1 0 1.22-.7 2.35-1.25 2.93-.55-.58-1.25-1.71-1.25-2.93 0-1 .45-1.95 1.25-3.1Z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1.5 text-[#d5ff58]">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              d="m12 2.75 2.6 5.27 5.82.85-4.2 4.09 1 5.79L12 2.75"
                              opacity="0.9"
                            />
                          </svg>
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-center">
                      <Link
                        href={`/fitLogs/${item.id}`}
                        onClick={() => handleViewDetails(item)}
                        className="rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
                      >
                        View Details
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleMarkDone(item)}
                        className="inline-flex items-center gap-2 rounded-full bg-[#d5ff58] px-4 py-2 text-sm font-bold text-[#071018] transition-transform hover:scale-[1.02]"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-4 w-4"
                        >
                          <path
                            d="M5 10.5 8.2 13.7 15 6.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Mark as Done
                      </button>

                      <button
                        type="button"
                        onClick={() => handleRemove(item)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-slate-300 transition-colors hover:border-white/20 hover:text-white"
                        aria-label={`Remove ${item.name}`}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default MyPlan;
