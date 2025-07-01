import CongressPageComponent from "@/components/CongressPageComponent";
import { billTypeData } from "@/lib/mock/billData";

const BillByCongressPage = async ({
  params,
}: {
  params: Promise<{ congress: string }>;
}) => {
  const { congress } = await params;

  return (
    <CongressPageComponent params={{ congress }} billData={billTypeData} />
  );
};

export default BillByCongressPage;
