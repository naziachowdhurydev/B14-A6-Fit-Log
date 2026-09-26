import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#2a2f36]  text-white container mx-auto">
      <div className="mx-auto flex w-fullitems-center justify-between gap-4 px-3 py-4 sm:px-5 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-5 w-5 items-center justify-center rounded-mdp-1">
            <Image
              src="/assets/logo.png"
              alt="FitLog logo"
              width={30}
              height={30}
              className="h-7 w-7 object-contain"
            />
          </div>

          <span className="text-[13px] font-black uppercase tracking-[0.18em] text-[#d9f500]">
            FITLOG
          </span>
        </div>

        <p className="text-right text-[11px] text-[#dfe5ee] sm:text-[12px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
