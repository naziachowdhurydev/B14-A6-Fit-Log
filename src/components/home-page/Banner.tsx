import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="mx-auto w-full max-w-350 overflow-hidden rounded-[30px] bg-[#0c1520] px-5 py-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] sm:px-8 md:px-10 lg:px-14 xl:px-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d5ff58] sm:text-xs">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-155 text-4xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-[5rem]">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-140 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-7 inline-flex items-center justify-center rounded-xl border border-[#d5ff58] bg-[#d5ff58] px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#071018] shadow-[0_0_20px_rgba(213,255,88,0.25)] transition-transform duration-200 hover:scale-[1.02] sm:px-6 sm:py-3.5 sm:text-xs">
            BROWSE WORKOUTS
          </button>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-140">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(213,255,88,0.05),transparent_52%)]" />
            <Image
              src="/assets/banner.png"
              alt="Strength training machine illustration"
              width={560}
              height={620}
              priority
              className="mx-auto h-auto w-full max-w-105 object-contain sm:max-w-117.5 lg:max-w-130"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
