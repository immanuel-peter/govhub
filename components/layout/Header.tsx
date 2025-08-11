"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronsRight, Eye, StarIcon, Share2 } from "lucide-react";
import { Toaster, toast } from "sonner";

import { formatCongress, getBillTypeAlias } from "@/lib/utils";

interface HeaderProps {
  congress: number;
  billType: string;
  billNumber: number;
  title: string;
  isLaw: boolean;
  stats: BillStats;
}

export interface BillStats {
  watchers: number;
  stars: number;
}

const LawBadge = () => (
  <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-amber-100 text-amber-800">
    <svg
      className="w-4 h-4 mr-1.5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
    Law
  </span>
);

const Header = ({
  congress,
  billType,
  billNumber,
  title,
  isLaw,
  stats,
}: HeaderProps) => {
  const [isWatched, setIsWatched] = useState(false);
  const [watchCount, setWatchCount] = useState(stats.watchers);
  const [isStarred, setIsStarred] = useState(false);
  const [starCount, setStarCount] = useState(stats.stars);

  const handleWatch = () => {
    if (isWatched) {
      setWatchCount(watchCount - 1);
      setIsWatched(false);
    } else {
      setWatchCount(watchCount + 1);
      setIsWatched(true);
    }
  };

  const handleStar = () => {
    if (isStarred) {
      setStarCount(starCount - 1);
      setIsStarred(false);
    } else {
      setStarCount(starCount + 1);
      setIsStarred(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!");
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <Toaster position="bottom-right" richColors />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumbs and Action Buttons */}
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-2">
            <Link
              href={`/bill/${congress}`}
              className="font-semibold text-blue-600 cursor-pointer"
            >
              {formatCongress(congress)}
            </Link>
            <ChevronsRight className="w-4 h-4 text-gray-400" />
            <Link
              href={`/bill/${congress}/${billType}`}
              className="font-semibold text-blue-600 cursor-pointer"
            >
              {getBillTypeAlias(billType)}
            </Link>
            <ChevronsRight className="w-4 h-4 text-gray-400" />
            <span className="font-semibold">{billNumber}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleWatch}
              className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
            >
              <Eye className={`w-4 h-4 ${isWatched && "text-blue-500"}`} />
              <span>
                Watch{" "}
                <span className="bg-gray-200 px-1 py-0.5 rounded-full">
                  {watchCount}
                </span>
              </span>
            </button>
            <button
              onClick={handleStar}
              className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
            >
              <StarIcon
                className={`w-4 h-4 ${isStarred && "text-yellow-500"}`}
              />
              <span>
                Star{" "}
                <span className="bg-gray-200 px-1 py-0.5 rounded-full">
                  {starCount}
                </span>
              </span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center space-x-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
        {/* Bill Title */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {isLaw && <LawBadge />}
        </div>
      </div>
    </div>
  );
};

export default Header;
