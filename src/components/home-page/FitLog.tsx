"use client";

import React, { useEffect, useMemo, useState } from "react";
import FitLogCard from "../shared/FitLogCard";
import { IFitData } from "../../types/fitLog.type";

const FitLog = () => {
  const [fitData, setFitData] = useState<IFitData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/fitData.json`,
          { cache: "no-store" },
        );
        const data = await res.json();
        if (isMounted) {
          setFitData(data);
        }
      } catch (error) {
        console.error("Failed to load fit data", error);
        if (isMounted) {
          setFitData([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredFitData = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return fitData;
    }

    return fitData.filter((fit) => {
      const nameMatch = fit.name.toLowerCase().includes(query);
      const tagMatch = fit.muscleGroups.some((tag) =>
        tag.toLowerCase().includes(query),
      );

      return nameMatch || tagMatch;
    });
  }, [fitData, searchTerm]);

  return (
    <section className="container mx-auto my-9 px-4">
      <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            THE LIBRARY
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <label className="w-full max-w-sm">
          <span className="sr-only">Search workouts</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by workout or tag"
            className="w-full rounded-full border border-white/10 bg-[#0b1116] px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-[#d5ff58]"
          />
        </label>
      </div>

      {isLoading ? (
        <div className="flex min-h-40 items-center justify-center">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0b1116] px-5 py-3 text-sm font-medium text-slate-200">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#d5ff58] border-t-transparent" />
            Loading workouts...
          </div>
        </div>
      ) : filteredFitData.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 bg-[#081018] px-4 py-10 text-center text-slate-300">
          No workouts match “{searchTerm}”.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredFitData.map((fit: IFitData, inx: number) => {
            return <FitLogCard key={fit.id ?? inx} fit={fit} />;
          })}
        </div>
      )}
    </section>
  );
};

export default FitLog;
