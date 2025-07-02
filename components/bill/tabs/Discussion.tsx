import { MessageSquare, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getRelativeTime } from "@/lib/utils";

export interface Discussion {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  replyCount: number;
}

interface DiscussionTabProps {
  congress: number;
  billType: string;
  billNumber: number;
  discussions: Discussion[];
}

const DiscussionTab = ({
  congress,
  billType,
  billNumber,
  discussions,
}: DiscussionTabProps) => {
  if (discussions.length === 0) {
    return (
      <div className="p-4 md:p-6 lg:p-8 min-h-[490px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Discussions</h2>
          <Link
            href={`/bill/${congress}/${billType}/${billNumber}/discussions/new?exists=true`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 cursor-pointer"
          >
            New discussion
          </Link>
        </div>
        <p className="text-gray-600 font-semibold">Start a discussion!</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-[600px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Discussions</h2>
        <Link
          href={`/bill/${congress}/${billType}/${billNumber}/discussions/new?exists=true`}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 cursor-pointer"
        >
          New discussion
        </Link>
      </div>
      <div className="border border-gray-200 rounded-lg">
        {discussions.map((discussion, index) => (
          <div
            key={discussion.id}
            className={`p-4 flex items-center space-x-4 ${
              index < discussions.length - 1 ? "border-b" : ""
            }`}
          >
            <MessageSquare className="w-6 h-6 text-blue-500" />
            <div>
              <Link
                href={`/bill/${congress}/${billType}/${billNumber}/discussions/${discussion.id}`}
                className="font-semibold text-gray-800 hover:text-blue-600"
              >
                {discussion.title}
              </Link>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>
                  Opened by{" "}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {discussion.author}
                  </span>
                </span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{getRelativeTime(discussion.createdAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{discussion.replyCount} replies</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionTab;
