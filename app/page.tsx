import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LandingSlides from "@/components/LandingSlides";
import TrendingBills from "@/components/TrendingBills";

import { trendingBills } from "@/lib/mock/trendingBills";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="flex-1">
        <LandingSlides />
        <TrendingBills trendingBills={trendingBills} />
      </main>
      <Footer />
    </div>
  );
}
