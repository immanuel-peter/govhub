import BillTypePageComponent from "@/components/BillTypePageComponent";
import { billTypeData } from "@/lib/mock/billData";

const BillPage = async ({
  params,
}: {
  params: Promise<{ congress: string; bill_type: string }>;
}) => {
  const { congress, bill_type } = await params;

  return (
    <BillTypePageComponent
      params={{ congress, bill_type }}
      billData={billTypeData}
    />
  );
};

export default BillPage;
