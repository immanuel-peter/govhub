import { MessageSquare } from "lucide-react";

const DiscussionTab = () => (
  <div className="p-4 md:p-6 lg:p-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Discussions</h2>
      <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 cursor-pointer">
        New discussion
      </button>
    </div>
    <div className="border border-gray-200 rounded-lg">
      <div className="p-4 flex items-center space-x-4 border-b">
        <MessageSquare className="w-6 h-6 text-green-500" />
        <div>
          <a
            href="#"
            className="font-semibold text-gray-800 hover:text-blue-600"
          >
            Clarification on Section 301 funding allocation
          </a>
          <p className="text-sm text-gray-500">
            Opened by <span className="font-medium">civicHacker</span> 2 days
            ago · 5 replies
          </p>
        </div>
      </div>
      <div className="p-4 flex items-center space-x-4 border-b">
        <MessageSquare className="w-6 h-6 text-green-500" />
        <div>
          <a
            href="#"
            className="font-semibold text-gray-800 hover:text-blue-600"
          >
            Potential impact on small businesses
          </a>
          <p className="text-sm text-gray-500">
            Opened by <span className="font-medium">policyAnalyst22</span> 5
            days ago · 12 replies
          </p>
        </div>
      </div>
      <div className="p-4 flex items-center space-x-4">
        <MessageSquare className="w-6 h-6 text-green-500" />
        <div>
          <a
            href="#"
            className="font-semibold text-gray-800 hover:text-blue-600"
          >
            Question about the implementation timeline
          </a>
          <p className="text-sm text-gray-500">
            Opened by <span className="font-medium">concernedCitizen</span> 1
            week ago · 3 replies
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default DiscussionTab;
