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

const AmendmentsTab = ({ amendments }: { amendments: Amendment[] }) => {
  if (amendments.length === 0) {
    return (
      <div className="p-4 md:p-6 lg:p-8 min-h-[600px] flex items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          No amendments found
        </h2>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-[600px]">
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
              <strong>Purpose:</strong>{" "}
              {amendment.purpose || "Unstated purpose"}
            </p>
            {amendment.latestAction.text && amendment.latestAction.date && (
              <p className="mt-3 text-xs text-gray-500 border-t pt-2">
                <strong>Latest Action:</strong> {amendment.latestAction.text} (
                {amendment.latestAction.date})
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmendmentsTab;
