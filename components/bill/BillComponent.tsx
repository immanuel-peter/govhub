"use client";

import Link from "next/link";

import { formatDate } from "@/lib/utils";

export interface BillData {
  title: string;
  congress: number;
  type: string;
  number: number;
  latestAction: {
    text: string;
    date: string;
  };
}

const BillComponent = ({ bill }: { bill: BillData }) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <Link href={`/bill/${bill.congress}/${bill.type}/${bill.number}`}>
      <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
        {bill.title}
      </h3>
    </Link>
    <p className="text-sm text-blue-600 font-medium mt-1">
      {bill.congress}th Congress - {bill.type} {bill.number}
    </p>
    {bill.latestAction.text && bill.latestAction.date && (
      <p className="mt-3 text-xs text-gray-500 border-t pt-2">
        <strong>Latest Action:</strong> {bill.latestAction.text} (
        {formatDate(bill.latestAction.date)})
      </p>
    )}
  </div>
);

export default BillComponent;
