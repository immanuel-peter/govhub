import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LandingSlides from "@/components/pages/LandingSlides";
import TrendingBills from "@/components/pages/TrendingBills";

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
