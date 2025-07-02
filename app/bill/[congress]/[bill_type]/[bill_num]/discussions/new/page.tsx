import NotFoundPage from "@/app/not-found";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import NewDiscussionComponent from "@/components/pages/NewDiscussionComponent";
import { getBillTitle } from "@/lib/fetchers/fetchBill";

const NewDiscussionPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ congress: string; bill_type: string; bill_num: string }>;
  searchParams: Promise<{ exists: string }>;
}) => {
  const { congress, bill_type, bill_num } = await params;
  const { exists } = await searchParams;
  const billTitle = await getBillTitle(
    parseInt(congress),
    bill_type,
    parseInt(bill_num)
  );
  if (!billTitle || exists !== "true") {
    return <NotFoundPage />;
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <NewDiscussionComponent
        congress={parseInt(congress)}
        billType={bill_type}
        billNumber={parseInt(bill_num)}
        billTitle={billTitle}
      />
      <Footer />
    </div>
  );
};

export default NewDiscussionPage;
