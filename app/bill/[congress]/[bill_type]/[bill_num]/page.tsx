import BillPageComponent from "@/components/BillPageComponent";
import { fetchSpecificBill } from "@/lib/fetchers/fetchBill";

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
  console.log(billData);
  return <BillPageComponent billData={billData} />;
};

export default BillPage;
