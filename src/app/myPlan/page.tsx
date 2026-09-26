"use client";

import { FitLogContext } from "../../context/FitLog.Provider";
import React, { useContext } from "react";

const MyPlan = () => {
  const { plan } = useContext(FitLogContext) as { plan?: unknown };
  console.log(plan, "plan");
  return <div>my plan is here</div>;
};

export default MyPlan;
