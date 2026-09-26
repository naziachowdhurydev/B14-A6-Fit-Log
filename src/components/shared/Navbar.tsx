"use client";

import { FitLogContext } from "../../context/FitLog.Provider";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Workouts", active: true, href: "/" },
  { label: "My Plan", active: false, href: "/myPlan" },
];

const Navbar = () => {
  const { plan, save } = useContext(FitLogContext);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#05090d]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-360 px-3 sm:px-5 lg:px-8">
        <nav className="relative flex min-h-20 items-center justify-between gap-3">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo.png"
                alt="FitLog logo"
                width={30}
                height={30}
                className="h-7 w-7 object-contain"
              />

              <span className="text-[15px] font-black uppercase tracking-[0.08em] text-[#d9f500]">
                FITLOG
              </span>
            </div>
          </Link>

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-[#0d1218] p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                type="button"
                href={item.href}
                className={[
                  "rounded-full px-5 py-2 text-[13px] font-medium transition-all",
                  item.active
                    ? "bg-[#1f3529] text-[#d9f500]"
                    : "text-[#9ca3af] hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <Link href="/myPlan?tab=plan">
              <div className="flex items-center gap-2 text-[13px] text-[#b5b7bb]">
                <span>Plan</span>

                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8ff00] px-1 text-[11px] font-bold text-black">
                  {plan.length}
                </span>
              </div>
            </Link>

            <Link href="/myPlan?tab=saved">
              <div className="flex items-center gap-2 text-[13px] text-[#b5b7bb]">
                <span>Saved</span>

                <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#30343a] px-1 text-[11px] text-[#9da1a7]">
                  {save.length}
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                type="button"
                href={item.href}
                className={[
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                  item.active
                    ? "bg-[#1f3529] text-[#d9f500]"
                    : "text-[#9ca3af] hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
