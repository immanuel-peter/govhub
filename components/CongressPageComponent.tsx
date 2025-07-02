"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BillComponent, { BillData as BillDataType } from "./BillComponent";
import { formatCongress } from "@/lib/utils";

const CongressPageComponent = ({
  params,
  billData,
}: {
  params: { congress: string };
  billData: BillDataType[];
}) => {
  const { congress } = params;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-start items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="font-semibold text-blue-600">
              {formatCongress(parseInt(congress))}
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

export default CongressPageComponent;
