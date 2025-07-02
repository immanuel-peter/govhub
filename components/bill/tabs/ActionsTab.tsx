import { List } from "lucide-react";
import { getActionTypeAlias, formatDate } from "@/lib/utils";

export interface Action {
  type: string;
  date: string;
  text: string;
}

const ActionTypeBadge = ({ type }: { type: string }) => {
  const typeStyles = {
    Committee: "bg-blue-100 text-blue-800",
    Calendars: "bg-yellow-100 text-yellow-800",
    Floor: "bg-purple-100 text-purple-800",
    BecameLaw: "bg-green-100 text-green-800",
    IntroReferral: "bg-indigo-100 text-indigo-800",
    President: "bg-red-100 text-red-800",
    ResolvingDifferences: "bg-pink-100 text-pink-800",
    Discharge: "bg-gray-100 text-gray-800",
    NotUsed: "bg-gray-100 text-gray-800",
    Veto: "bg-black text-white",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        typeStyles[type as keyof typeof typeStyles] ||
        "bg-gray-100 text-gray-800"
      }`}
    >
      {getActionTypeAlias(type)}
    </span>
  );
};

const ActionsTab = ({ actions }: { actions: Action[] }) => {
  if (actions.length === 0) {
    return (
      <div className="p-4 md:p-6 lg:p-8 min-h-[600px]">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Actions</h2>
        <p className="text-gray-600">No actions found for this bill.</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Actions Timeline
      </h2>
      <div className="relative border-l-2 border-gray-200 ml-4">
        {actions.map((action, index) => (
          <div key={index} className="mb-8 ml-8">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
              <List className="w-4 h-4 text-blue-600" />
            </span>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <ActionTypeBadge type={action.type} />
                <time className="text-sm font-normal text-gray-500">
                  {formatDate(action.date)}
                </time>
              </div>
              <p className="text-base font-normal text-gray-600">
                {action.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsTab;
