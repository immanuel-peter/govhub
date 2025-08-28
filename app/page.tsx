import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LandingSlides from "@/components/pages/LandingSlides";
import TrendingBills from "@/components/pages/TrendingBills";
import TrendingBillsError from "@/components/pages/TrendingBillsError";

import { parseTrendingBills } from "@/lib/utils/parseTrendingBills";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

export default async function Home() {
  const trendingBillsRecord = await parseTrendingBills();

  // If we couldn't fetch trending bills, show error UI
  if (!trendingBillsRecord) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="flex-1">
          <LandingSlides />
          <TrendingBillsError />
        </main>
        <Footer />
      </div>
    );
  }

  const trendingBills = Object.entries(trendingBillsRecord).map(
    ([rank, bill]) => ({
      rank: parseInt(rank, 10),
      ...bill,
    })
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
