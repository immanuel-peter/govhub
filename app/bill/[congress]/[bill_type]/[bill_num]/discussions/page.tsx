import NotFoundPage from "@/app/not-found";
import BillPageComponent from "@/components/pages/BillPageComponent";
import DiscussionTab from "@/components/bill/tabs/Discussion";
import { fetchSpecificBill } from "@/lib/fetchers/fetchBill";
import { billStats, discussions } from "@/lib/mock/billData";

const DiscussionsPage = async ({
  params,
}: {
  params: Promise<{ congress: string; bill_type: string; bill_num: string }>;
}) => {
  const { congress, bill_type, bill_num } = await params;
  const billData = await fetchSpecificBill(
    parseInt(congress),
    bill_type,
    parseInt(bill_num)
  );
  if (!billData) {
    return <NotFoundPage />;
  }
  return (
    <BillPageComponent
      billData={billData}
      discussions={discussions}
      stats={billStats}
      currentTab="Discussion"
    >
      <DiscussionTab
        congress={billData.congress}
        billType={billData.billType}
        billNumber={billData.billNumber}
        discussions={discussions}
      />
    </BillPageComponent>
  );
};

export default DiscussionsPage;
