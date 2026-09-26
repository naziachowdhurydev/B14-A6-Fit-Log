import React from "react";
import FitLogCard from "../../components/shared/FitLogCard";
import { IFitData } from "@/types/fitLog.type";

const getFitLog = async (): Promise<IFitData[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/fitData.json`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data;
};

const FitLog = async () => {
  const fitData = await getFitLog();
  console.log(fitData);

  return (
    <section className="container mx-auto my-20 px-4">
      <div className="mb-7">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Explore All the FitLogs Workouts
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {fitData.map((fit: IFitData, inx: number) => {
          return <FitLogCard key={inx} fit={fit} />;
        })}
      </div>
    </section>
  );
};

export default FitLog;
