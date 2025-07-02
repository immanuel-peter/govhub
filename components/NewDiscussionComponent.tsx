"use client";

import { useState } from "react";
import { X, Send, HelpCircle } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface NewDiscussionComponentProps {
  congress: number;
  billType: string;
  billNumber: number;
  billTitle: string;
}

export const MarkdownPreview = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-sm max-w-none text-gray-900">
      <ReactMarkdown
        components={{
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

const NewDiscussionComponent = ({
  congress,
  billType,
  billNumber,
  billTitle,
}: NewDiscussionComponentProps) => {
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>(
    "## Section 2 Analysis\n\nThis is some **bold text** and this is *italic*.\n\n- Point 1\n- Point 2"
  );
  const [view, setView] = useState<"write" | "preview">("write");

  const handleCancel = () => {
    setComment("");
    setTitle("");
    setView("write");
  };

  return (
    <main className="flex-grow bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">
          Start a New Discussion
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          for{" "}
          <Link
            href={`/bill/${congress}/${billType}/${billNumber}`}
            className="font-semibold text-blue-600 hover:underline"
          >
            {billTitle}
          </Link>
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-8">
          {/* Main Form Area */}
          <div className="flex-grow">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <div>
                <label
                  htmlFor="discussion-title"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="discussion-title"
                    className="block p-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-gray-900 placeholder:text-gray-400"
                    placeholder="e.g., Question about Section 301 funding"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="comment"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Comment
                </label>
                <div className="border border-gray-300 rounded-md">
                  {/* Tabs for all screen sizes */}
                  <div className="border-b border-gray-300">
                    <nav className="flex -mb-px">
                      <button
                        type="button"
                        onClick={() => setView("write")}
                        className={`w-1/2 py-2 text-sm font-medium text-center cursor-pointer ${
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
                        className={`w-1/2 py-2 text-sm font-medium text-center cursor-pointer ${
                          view === "preview"
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        Preview
                      </button>
                    </nav>
                  </div>
                  <div>
                    {/* Write Textarea */}
                    <div className={view === "write" ? "block" : "hidden"}>
                      <textarea
                        rows={12}
                        id="comment"
                        className="block w-full rounded-b-md border-0 focus:ring-0 sm:text-sm p-3 text-gray-900 placeholder:text-gray-400"
                        placeholder="Write your comment here. You can use Markdown for formatting."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>
                    {/* Preview Pane */}
                    <div className={view === "preview" ? "block" : "hidden"}>
                      <div className="p-3 min-h-[288px] bg-gray-50 rounded-b-md">
                        <MarkdownPreview content={comment} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Styling with Markdown is supported.
                </p>
              </div>

              <div className="mt-6 flex justify-end gap-x-3 border-t pt-4">
                <button
                  type="button"
                  className="cursor-pointer inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-100 hover:text-red-600"
                  onClick={handleCancel}
                >
                  <X className="-ml-0.5 mr-1.5 h-5 w-5" />
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  <Send className="-ml-0.5 mr-1.5 h-5 w-5" />
                  Submit discussion
                </button>
              </div>
            </form>
          </div>

          {/* Informational Sidebar */}
          <aside className="w-full md:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-sm font-semibold text-blue-800">
                      Discussion Guidelines
                    </h3>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-blue-700">
                      <li>Stay on topic with the bill.</li>
                      <li>Be respectful and constructive.</li>
                      <li>Cite sources when possible.</li>
                      <li>Avoid hate speech.</li>
                      <li>Avoid personal attacks.</li>
                      <li>Keep the conversation productive.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default NewDiscussionComponent;
