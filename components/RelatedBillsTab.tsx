import BillComponent, { BillData as BillDataType } from "./BillComponent";

const RelatedBillsTab = ({
  relatedBills,
}: {
  relatedBills: BillDataType[];
}) => (
  <div className="p-4 md:p-6 lg:p-8">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Related Bills</h2>
    <div className="space-y-4">
      {relatedBills.map((bill, index) => (
        <BillComponent key={index} bill={bill} />
      ))}
    </div>
  </div>
);

export default RelatedBillsTab;
