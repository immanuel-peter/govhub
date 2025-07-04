"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col bg-gray-50 rounded-lg shadow-lg">
      {/* Navigation Controls */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 rounded-t-lg">
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className="p-2 rounded-md hover:bg-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Previous page"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <span className="text-sm font-medium text-gray-800">
          {numPages ? `Page ${pageNumber} of ${numPages}` : "Loading..."}
        </span>

        <button
          disabled={pageNumber >= (numPages ?? 0)}
          onClick={() => setPageNumber(pageNumber + 1)}
          className="p-2 rounded-md hover:bg-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Next page"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* PDF Document */}
      <div className="flex justify-center p-4 bg-gray-50 rounded-b-lg">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="shadow-lg"
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
