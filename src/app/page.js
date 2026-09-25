import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#070b10] text-white">
      <Navbar />
      <div className="flex-1" />
      <Footer />
    </main>
  );
}
