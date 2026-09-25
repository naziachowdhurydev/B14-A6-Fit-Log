import React from "react";
import Image from "next/image";

const navItems = [
  { label: "Workouts", active: true },
  { label: "My Plan", active: false },
];

const Navbar = () => {
  return (
    <header className="border-b border-[#1f2a36] bg-[#070b10] text-white">
      <div className="mx-auto w-full max-w-360 px-3 sm:px-5 lg:px-8">
        <nav className="relative flex min-h-20 items-center justify-between">
          {/* LEFT - LOGO */}
          <div className="flex shrink-0 items-center gap-3">
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

          {/* CENTER - NAVIGATION */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              hidden
              -translate-x-1/2
              -translate-y-1/2
              items-center
              gap-1
              rounded-full
              p-1
              md:flex
            "
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className={[
                  "rounded-full px-5 py-2 text-[13px] font-medium transition-all",
                  item.active
                    ? "bg-[#1f3529] text-[#d9f500]"
                    : "text-[#9ca3af] hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT - PLAN / SAVED */}
          <div className="hidden items-center gap-7 md:flex">
            {/* Plan */}
            <div className="flex items-center gap-2 text-[13px] text-[#b5b7bb]">
              <span>Plan</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8ff00] px-1 text-[11px] font-bold text-black">
                0
              </span>
            </div>

            {/* Saved */}
            <div className="flex items-center gap-2 text-[13px] text-[#b5b7bb]">
              <span>Saved</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#30343a] px-1 text-[11px] text-[#9da1a7]">
                0
              </span>
            </div>
          </div>

          {/* MOBILE MENU / TABS */}
          <div className="flex items-center gap-1 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className={[
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                  item.active
                    ? "bg-[#1f3529] text-[#d9f500]"
                    : "text-[#9ca3af] hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
