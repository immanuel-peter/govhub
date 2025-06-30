export interface RelatedBill {
  title: string;
  congress: number;
  type: string;
  number: number;
  latestAction: {
    text: string;
    date: string;
  };
}

const RelatedBillsTab = ({ relatedBills }: { relatedBills: RelatedBill[] }) => (
  <div className="p-4 md:p-6 lg:p-8">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Related Bills</h2>
    <div className="space-y-4">
      {relatedBills.map((bill, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800">{bill.title}</h3>
          <p className="text-sm text-blue-600 font-medium mt-1">
            {bill.congress}th Congress - {bill.type} {bill.number}
          </p>
          <p className="mt-3 text-xs text-gray-500 border-t pt-2">
            <strong>Latest Action:</strong> {bill.latestAction.text} (
            {bill.latestAction.date})
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedBillsTab;
