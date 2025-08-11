"use client";

import { formatDate } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useState } from "react";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
});

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

const BillTab = ({ summary, pdfUrl, metadata }: BillTabProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to truncate HTML content to approximately 300 characters
  const truncateHtml = (html: string, maxLength: number = 300) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";

    if (textContent.length <= maxLength) {
      return html;
    }

    // Find a good breaking point (end of sentence or word)
    const truncated = textContent.substring(0, maxLength);
    const lastSentence = truncated.lastIndexOf(".");
    const lastSpace = truncated.lastIndexOf(" ");

    const breakPoint =
      lastSentence > maxLength * 0.7 ? lastSentence + 1 : lastSpace;
    const truncatedText = textContent.substring(0, breakPoint);

    // Create truncated HTML by walking through the original HTML
    let result = "";
    let textCount = 0;
    let insideTag = false;

    for (let i = 0; i < html.length; i++) {
      const char = html[i];

      if (char === "<") {
        insideTag = true;
        result += char;
      } else if (char === ">") {
        insideTag = false;
        result += char;
      } else if (!insideTag) {
        if (textCount < truncatedText.length) {
          result += char;
          textCount++;
        } else {
          break;
        }
      } else {
        result += char;
      }
    }

    return result + "...";
  };

  const displaySummary = isExpanded ? summary : truncateHtml(summary);
  const shouldShowToggle =
    summary &&
    (summary.length > 300 || (summary.match(/\S+/g) || []).length > 50);

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-[600px]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full md:w-2/3">
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
              Summary
            </h2>
            {summary ? (
              <div>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: displaySummary }}
                />
                {shouldShowToggle && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1"
                  >
                    {isExpanded ? (
                      <span className="flex items-center gap-1 cursor-pointer">
                        Show less
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 cursor-pointer">
                        Show more
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                )}
              </div>
            ) : (
              <p className="prose prose-lg max-w-none">
                Congress is still working on a summary.
              </p>
            )}
          </div>
          {pdfUrl && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
                Bill Document
              </h2>
              <PdfViewer
                fileUrl={`/api/proxy-pdf?url=${encodeURIComponent(pdfUrl)}`}
              />
            </div>
          )}
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
              {metadata.latestAction.text && metadata.latestAction.date && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Latest Action
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {metadata.latestAction.text}
                  </dd>
                  <dd className="mt-1 text-xs text-gray-500">
                    {formatDate(metadata.latestAction.date)}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Policy Area
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {metadata.policyArea}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Introduction Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {formatDate(metadata.introductionDate)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillTab;
