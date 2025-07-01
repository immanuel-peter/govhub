"use client";

import { ChevronsRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBillTypeAlias } from "@/lib/utils";
import BillComponent, { BillData as BillDataType } from "./BillComponent";

const BillTypePageComponent = ({
  params,
  billData,
}: {
  params: { congress: string; bill_type: string };
  billData: BillDataType[];
}) => {
  const { congress, bill_type } = params;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-start items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span
              onClick={() => {}}
              className="font-semibold text-blue-600 cursor-pointer"
            >
              {congress}th Congress
            </span>
            <ChevronsRight className="w-4 h-4 text-gray-400" />
            <span
              onClick={() => {}}
              className="font-semibold text-blue-600 cursor-pointer"
            >
              {getBillTypeAlias(bill_type)}
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto space-y-4 px-4 sm:px-6 lg:px-8 py-4">
        {billData.map((bill) => (
          <BillComponent key={bill.number} bill={bill} />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default BillTypePageComponent;
