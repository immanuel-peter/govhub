"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

const TrendingBillsError = () => (
  <div className="bg-white py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center">
          <span className="mr-3 text-2xl">🔥</span>
          Trending This Week
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          The most discussed and active legislation right now!
        </p>
      </div>
      <div className="mt-10 border-t border-gray-200">
        <div className="flex flex-col items-center justify-center py-12 px-4">
          <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Can't fetch trending bills right now
          </h3>
          <p className="text-gray-500 text-center max-w-lg">
            We're having trouble loading the latest trending bills from
            Congress.gov. Please try refreshing the page in a few moments.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TrendingBillsError;
