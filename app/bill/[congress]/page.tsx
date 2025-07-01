import CongressPageComponent from "@/components/CongressPageComponent";
import { fetchBill } from "@/lib/fetchers/fetchBill";

const BillByCongressPage = async ({
  params,
}: {
  params: Promise<{ congress: string }>;
}) => {
  const { congress } = await params;

  const billData = await fetchBill(parseInt(congress));

  return <CongressPageComponent params={{ congress }} billData={billData} />;
};

export default BillByCongressPage;
