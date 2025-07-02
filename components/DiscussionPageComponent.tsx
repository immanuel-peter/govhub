"use client";

import { Bell, ChevronsRight, Send } from "lucide-react";
import { useState } from "react";
import { formatCongress, getBillTypeAlias } from "@/lib/utils";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface CommentData {
  id: number;
  author: string;
  avatar: string;
  date: string;
  body: string;
}

interface DiscussionData {
  title: string;
  author: string;
  authorAvatar: string;
  date: string;
  status: string;
  bill: {
    title: string;
    type: string;
    number: number;
    congress: number;
  };
  originalPost: {
    body: string;
  };
  comments: CommentData[];
  participants: {
    name: string;
    avatar: string;
  }[];
}

const discussionData: DiscussionData = {
  title: "Clarification on Section 301 funding allocation",
  author: "civicHacker",
  authorAvatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=C",
  date: "June 28, 2025",
  status: "Open",
  bill: {
    title: "Infrastructure Investment and Jobs Act",
    type: "HR",
    number: 3684,
    congress: 117,
  },
  originalPost: {
    body: `I've been going through the text of the **Infrastructure Investment and Jobs Act**, specifically Section 301.\n\nIt mentions a large sum allocated to "urban transportation projects." Can anyone clarify if this includes funding for things like:\n\n- Smart traffic light systems?\n- Micromobility infrastructure (e.g., dedicated bike lanes)?\n- Public Wi-Fi on transit systems?\n\nThe language seems a bit vague, and I'm trying to understand the potential impact on modernizing city transit. Any insights or pointers to more specific language would be appreciated.`,
  },
  comments: [
    {
      id: 1,
      author: "policyAnalyst22",
      avatar: "https://placehold.co/40x40/D1FAE5/34D399?text=P",
      date: "commented on June 28, 2025",
      body: `Great question, @civicHacker. My reading is that those would likely fall under the discretionary grant programs managed by the Department of Transportation (DOT).\n\nWhile not explicitly named, "smart traffic light systems" would fit under the **SMART grant program** which is funded by this act. I'd recommend looking into the DOT's guidance on that program.`,
    },
    {
      id: 2,
      author: "transitAdvocate",
      avatar: "https://placehold.co/40x40/FEF3C7/FBBF24?text=T",
      date: "commented on June 29, 2025",
      body: `To add to what @policyAnalyst22 said, the micromobility infrastructure is a bit of a gray area. Some of it could be funded through the **Transportation Alternatives Program (TAP)**, which also gets a boost from this bill.\n\nIt often depends on how state and local agencies decide to prioritize their funding applications.`,
    },
    {
      id: 3,
      author: "civicHacker",
      avatar: "https://placehold.co/40x40/EBF4FF/7F9CF5?text=C",
      date: "commented on June 29, 2025",
      body: `Thanks both! That's incredibly helpful. The pointers to the SMART and TAP programs are exactly what I was looking for. I'll dig into the DOT's documentation on those.`,
    },
  ],
  participants: [
    {
      name: "civicHacker",
      avatar: "https://placehold.co/40x40/EBF4FF/7F9CF5?text=C",
    },
    {
      name: "policyAnalyst22",
      avatar: "https://placehold.co/40x40/D1FAE5/34D399?text=P",
    },
    {
      name: "transitAdvocate",
      avatar: "https://placehold.co/40x40/FEF3C7/FBBF24?text=T",
    },
  ],
};

// Component to render markdown with user mention badges
const MarkdownWithMentions = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-sm max-w-none text-gray-900">
      <ReactMarkdown
        components={{
          // Customize text nodes to handle @mentions
          text: ({ children }) => {
            const text = children as string;
            if (typeof text !== "string") return <>{children}</>;

            // Split text by @mentions while preserving the @ symbol
            const parts = text.split(/(@\w+)/g);

            return (
              <>
                {parts.map((part, index) => {
                  if (part.match(/^@\w+$/)) {
                    // This is a mention - render as badge
                    return (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mx-0.5"
                      >
                        {part}
                      </span>
                    );
                  }
                  // Regular text
                  return part;
                })}
              </>
            );
          },
          // Customize heading styles
          h1: ({ children }) => (
            <h1 className="text-xl font-bold text-gray-900 mb-3">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-medium text-gray-900 mb-2">
              {children}
            </h3>
          ),
          // Customize paragraph styles
          p: ({ children }) => (
            <p className="text-gray-700 mb-3 leading-relaxed">{children}</p>
          ),
          // Customize list styles
          ul: ({ children }) => (
            <ul className="list-disc pl-5 mb-3 text-gray-700">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 mb-3 text-gray-700">{children}</ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
          // Customize emphasis styles
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-900">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-800">{children}</em>
          ),
          // Customize code styles
          code: ({ children }) => (
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto mb-3">
              {children}
            </pre>
          ),
          // Customize blockquote styles
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-3">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

const CommentEditor = ({ avatar }: { avatar: string }) => {
  const [comment, setComment] = useState("");
  const [view, setView] = useState("write");

  return (
    <div className="flex items-start space-x-4">
      <img
        className="h-10 w-10 rounded-full bg-white border-2 border-white relative z-10"
        src={avatar}
        alt=""
      />
      <div className="min-w-0 flex-1 border border-gray-300 rounded-lg">
        <div className="border-b border-gray-300">
          <div className="flex -mb-px">
            <button
              type="button"
              onClick={() => setView("write")}
              className={`w-1/2 py-2 text-sm font-medium text-center ${
                view === "write"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Write
            </button>
            <button
              type="button"
              onClick={() => setView("preview")}
              className={`w-1/2 py-2 text-sm font-medium text-center ${
                view === "preview"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Preview
            </button>
          </div>
        </div>
        <div>
          <div className={view === "write" ? "block" : "hidden"}>
            <textarea
              rows={5}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="block w-full rounded-b-md border-0 focus:ring-0 sm:text-sm p-3 text-gray-500 placeholder:text-gray-500"
              placeholder="Add to the discussion..."
            />
          </div>
          <div className={view === "preview" ? "block" : "hidden"}>
            <div className="p-3 min-h-[120px] bg-gray-50 rounded-b-md">
              {comment ? (
                <MarkdownWithMentions content={comment} />
              ) : (
                <span className="text-gray-500">Nothing to preview</span>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 bg-gray-50 px-3 py-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
          >
            <Send className="-ml-0.5 mr-1.5 h-5 w-5" />
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

const Comment = ({ commentData }: { commentData: CommentData }) => (
  <div className="flex items-start space-x-4">
    <img
      className="h-10 w-10 rounded-full bg-white border-2 border-white relative z-10"
      src={commentData.avatar}
      alt={`${commentData.author}'s avatar`}
    />
    <div className="min-w-0 flex-1">
      <div className="border border-gray-300 rounded-lg">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-300 rounded-t-lg">
          <p className="text-sm">
            <strong className="font-semibold text-gray-900">
              {commentData.author}
            </strong>
            <span className="text-gray-500"> {commentData.date}</span>
          </p>
        </div>
        <div className="p-4 text-gray-700">
          <MarkdownWithMentions content={commentData.body} />
        </div>
      </div>
    </div>
  </div>
);

const DiscussionPageComponent = () => {
  const {
    title,
    author,
    authorAvatar,
    date,
    status,
    bill,
    originalPost,
    comments,
    participants,
  } = discussionData;

  return (
    <main className="flex-grow bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <Link
              href={`/bill/${bill.congress}`}
              className="font-semibold text-blue-600 cursor-pointer"
            >
              {formatCongress(bill.congress)}
            </Link>
            <ChevronsRight className="w-4 h-4 text-gray-400" />
            <Link
              href={`/bill/${bill.congress}/${bill.type}`}
              className="font-semibold text-blue-600 cursor-pointer"
            >
              {getBillTypeAlias(bill.type)}
            </Link>
            <ChevronsRight className="w-4 h-4 text-gray-400" />
            <Link
              href={`/bill/${bill.congress}/${bill.type}/${bill.number}`}
              className="font-semibold text-blue-600 cursor-pointer"
            >
              {bill.number}
            </Link>
            <ChevronsRight className="w-4 h-4 text-gray-400" />
            <Link
              href={`/bill/${bill.congress}/${bill.type}/${bill.number}/discussions/new?exists=true`}
              className="font-semibold text-blue-600 cursor-pointer"
            >
              Discussions
            </Link>
            <ChevronsRight className="w-4 h-4 text-gray-400" />
            <span className="font-semibold">{title}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            {title}
          </h1>
          <div className="flex items-center mt-2">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                status === "Open"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status}
            </span>
            <p className="ml-4 text-sm text-gray-600">
              <strong className="font-semibold">{author}</strong> opened this
              discussion on {date}
              <span className="mx-1">&middot;</span>
              {comments.length} comments
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Main Content: Discussion Timeline */}
          <div className="flex-grow min-w-0">
            <div className="relative">
              {/* Vertical line for the timeline */}
              <div
                className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200"
                aria-hidden="true"
              ></div>

              <div className="space-y-8">
                {/* Original Post */}
                <Comment
                  commentData={{
                    ...originalPost,
                    author,
                    date: `opened this discussion on ${date}`,
                    avatar: authorAvatar,
                    id: 0,
                  }}
                />
                {/* Comments */}
                {comments.map((comment) => (
                  <Comment key={comment.id} commentData={comment} />
                ))}
                {/* Reply Box */}
                <CommentEditor avatar="https://placehold.co/40x40/f0f0f0/333?text=Me" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0 mt-8 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Participants
                </h3>
                <div className="mt-2 flex flex-wrap -space-x-2">
                  {participants.map((p) => (
                    <img
                      key={p.name}
                      className="h-8 w-8 rounded-full border-2 border-white"
                      src={p.avatar}
                      alt={p.name}
                      title={p.name}
                    />
                  ))}
                </div>
              </div>
              <div>
                <button className="w-full inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <Bell className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default DiscussionPageComponent;
