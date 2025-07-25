import NotFoundPage from "@/app/not-found";
import BillPageComponent from "@/components/pages/BillPageComponent";
import BillTab from "@/components/bill/tabs/BillTab";
import { fetchSpecificBill } from "@/lib/fetchers/fetchBill";
import { billStats, discussions } from "@/lib/mock/billData";

const BillPage = async ({
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
      currentTab="Bill"
    >
      <BillTab
        summary={billData.billTabProps.summary}
        pdfUrl={billData.billTabProps.pdfUrl}
        metadata={billData.billTabProps.metadata}
      />
    </BillPageComponent>
  );
};

export default BillPage;
