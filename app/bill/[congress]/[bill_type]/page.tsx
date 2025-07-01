import BillTypePageComponent from "@/components/BillTypePageComponent";
import { fetchBill } from "@/lib/fetchers/fetchBill";

const BillByTypePage = async ({
  params,
}: {
  params: Promise<{ congress: string; bill_type: string }>;
}) => {
  const { congress, bill_type } = await params;

  const billData = await fetchBill(parseInt(congress), bill_type);

  return (
    <BillTypePageComponent
      params={{ congress, bill_type }}
      billData={billData}
    />
  );
};

export default BillByTypePage;
