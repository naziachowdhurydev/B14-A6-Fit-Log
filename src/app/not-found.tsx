import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#05090d] px-6 py-10 text-white">
      <div className="max-w-md text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d5ff58]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em]">
          Page not found
        </h1>
        <p className="mt-3 text-base text-slate-300">
          The workout or route you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#d5ff58] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[#071018] shadow-[0_0_24px_rgba(213,255,88,0.24)]"
        >
          Go to workouts
        </Link>
      </div>
    </main>
  );
}
