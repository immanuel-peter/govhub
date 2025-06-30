import BillPageComponent from "@/components/BillPageComponent";
import { billData } from "@/lib/mock/billData";

const BillPage = () => {
  return <BillPageComponent billData={billData} />;
};

export default BillPage;
