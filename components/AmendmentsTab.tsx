export interface Amendment {
  number: string;
  description: string;
  purpose: string;
  type: string;
  date: string;
  latestAction: {
    text: string;
    date: string;
  };
}

const AmendmentsTab = ({ amendments }: { amendments: Amendment[] }) => (
  <div className="p-4 md:p-6 lg:p-8">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Amendments</h2>
    <div className="space-y-6">
      {amendments.map((amendment, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600">
                {amendment.type} {amendment.number}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">
                {amendment.description}
              </h3>
            </div>
            <span className="text-sm text-gray-500">{amendment.date}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Purpose:</strong> {amendment.purpose}
          </p>
          <p className="mt-3 text-xs text-gray-500 border-t pt-2">
            <strong>Latest Action:</strong> {amendment.latestAction.text} (
            {amendment.latestAction.date})
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default AmendmentsTab;
