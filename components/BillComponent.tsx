export interface BillData {
  title: string;
  congress: number;
  type: string;
  number: number;
  latestAction: {
    text: string;
    date: string;
  };
}

const BillComponent = ({ bill }: { bill: BillData }) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <h3 className="text-lg font-semibold text-gray-800">{bill.title}</h3>
    <p className="text-sm text-blue-600 font-medium mt-1">
      {bill.congress}th Congress - {bill.type} {bill.number}
    </p>
    {bill.latestAction.text && bill.latestAction.date && (
      <p className="mt-3 text-xs text-gray-500 border-t pt-2">
        <strong>Latest Action:</strong> {bill.latestAction.text} (
        {bill.latestAction.date})
      </p>
    )}
  </div>
);

export default BillComponent;
