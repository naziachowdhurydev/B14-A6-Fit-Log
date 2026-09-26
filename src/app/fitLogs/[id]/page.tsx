import PlanButton from "../../../components/fitLogDetails/PlanButton";
import SaveButton from "../../../components/fitLogDetails/SaveButton";
import { IFitData } from "@/types/fitLog.type";
import Image from "next/image";
import React from "react";

interface IFitLogDetailsProps {
  params: Promise<{ id: string }>;
}

const getFitLog = async (): Promise<IFitData[]> => {
  const res = await fetch("http://localhost:3000/fitData.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const Page = async ({ params }: IFitLogDetailsProps) => {
  const { id } = await params;

  const fitLogsData = await getFitLog();

  const fit = fitLogsData.find(
    (fit: IFitData) => String(fit.id) === String(id),
  );

  if (!fit) {
    return (
      <div className="p-10 text-center text-white">Workout not found.</div>
    );
  }

  const details = [
    ["EQUIPMENT", fit.equipment],
    ["DIFFICULTY", fit.difficulty],
    ["SETS", fit.sets],
    ["REPS", fit.reps],
    ["DURATION", `${fit.duration} min`],
    ["CALORIES", `${fit.caloriesBurned} kcal`],
    ["RATING", fit.rating.toFixed(1)],
  ];

  return (
    <main className="px-4 py-6 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-380">
        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 ">
            <div className="relative h-105 w-full sm:h-130 lg:h-230">
              <Image
                src={fit.image}
                alt={fit.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className=" p-5 sm:p-7 lg:p-8">
            <h1 className="text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-[2.5rem] lg:text-[3.2rem]">
              {fit.name}
            </h1>

            <p className="mt-4 max-w-140 text-base leading-relaxed text-slate-300 sm:text-lg">
              {fit.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {fit.muscleGroups.map((group: string, index: number) => (
                <span
                  key={`${group}-${index}`}
                  className="inline-flex rounded-full border border-[#d5ff58] bg-[#d5ff58] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#081018]"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-5">
              {details.map(([label, value], index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm sm:text-[1.02rem]"
                >
                  <span className="font-semibold uppercase tracking-[0.08em] text-slate-400">
                    {label}
                  </span>
                  <span className="font-medium text-white">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-black uppercase tracking-[0.08em] text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3 text-base leading-relaxed text-slate-300">
                {fit.instructions.map((step: string, index: number) => (
                  <li key={`${step}-${index}`} className="flex gap-3">
                    <span className="mt-0.5 inline-flex min-w-5 justify-center text-white">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PlanButton fit={fit} />
              <SaveButton fit={fit} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
