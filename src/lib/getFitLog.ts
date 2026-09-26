import type { IFitData } from "@/types/fitLog.type";
import { promises as fs } from "fs";
import path from "path";

export async function getFitLog(): Promise<IFitData[]> {
  const filePath = path.join(process.cwd(), "public", "fitData.json");
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as IFitData[];
}
