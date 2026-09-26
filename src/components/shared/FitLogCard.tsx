import { IFitData } from "@/types/fitLog.type";
import Image from "next/image";
import React from "react";

interface FitLogCardProps {
  fit: IFitData;
}

const FitLogCard = ({ fit }: FitLogCardProps) => {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-[#252a31] bg-[#15171c] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#b6ff00]">
        {/* Image */}
        <div className="h-48 w-full overflow-hidden">
          <Image
            src={fit.image}
            alt={fit.name}
            width={740}
            height={416}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-2">
            {fit.muscleGroups?.map((muscle: string, index: number) => (
              <span
                key={index}
                className="rounded-full bg-[#b6ff00] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3 className="text-lg font-bold uppercase tracking-wide">
            {fit.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-500">{fit.equipment}</p>

          {/* Divider */}
          <div className="my-4 h-px bg-[#252a31]" />

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span className="flex items-center gap-1">
              ◷ {fit.duration} min
            </span>

            <span className="flex items-center gap-1">
              ● {fit.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">☆ {fit.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitLogCard;
