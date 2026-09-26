import Banner from "@/components/home-page/Banner";
import FitLog from "@/components/home-page/FitLog";

export default function Home() {
  return (
    <main className="px-3 py-9 sm:px-5 md:px-8 lg:px-10">
      <div className="mx-auto ">
        <Banner />
        <FitLog />
      </div>
    </main>
  );
}
