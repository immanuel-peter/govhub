export interface BillTabProps {
  summary: string;
  pdfUrl: string;
  metadata: {
    originChamber: string;
    latestAction: {
      text: string;
      date: string;
    };
    policyArea: string;
    introductionDate: string;
  };
}

const BillTab = ({ summary, pdfUrl, metadata }: BillTabProps) => (
  <div className="p-4 md:p-6 lg:p-8">
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left Column */}
      <div className="w-full md:w-2/3">
        <div className="prose max-w-none text-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Summary
          </h2>
          <p>{summary}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Bill Document
          </h2>
          <iframe
            src={pdfUrl}
            className="w-full h-96 border border-gray-300 rounded-lg"
            title="Bill Document PDF"
          />
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full md:w-1/3">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Information
          </h3>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Origin Chamber
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {metadata.originChamber}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Latest Action
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {metadata.latestAction.text}
              </dd>
              <dd className="mt-1 text-xs text-gray-500">
                {metadata.latestAction.date}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Policy Area</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {metadata.policyArea}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Introduction Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {metadata.introductionDate}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

export default BillTab;
