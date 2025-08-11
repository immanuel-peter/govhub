import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LandingSlides from "@/components/pages/LandingSlides";
import TrendingBills from "@/components/pages/TrendingBills";

import { parseTrendingBills } from "@/lib/utils/parseTrendingBills";

export default async function Home() {
  const trendingBillsRecord = await parseTrendingBills();
  const trendingBills = Object.entries(trendingBillsRecord).map(
    ([rank, bill]) => ({
      rank: parseInt(rank, 10),
      ...bill,
    }),
  );

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
