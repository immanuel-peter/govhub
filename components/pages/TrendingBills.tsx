import { MessageSquare, ScrollText, Pencil, Hash } from "lucide-react";
import Link from "next/link";
import { formatCongress, getBillTypeAlias } from "@/lib/utils";

interface TrendingBill {
  rank: number;
  congress: number;
  type: string;
  number: number;
  title: string;
}

const TrendingBills = ({
  trendingBills,
}: {
  trendingBills: TrendingBill[];
}) => (
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
        <ul role="list" className="divide-y divide-gray-100">
          {trendingBills.map((bill) => (
            <li
              key={bill.rank}
              className="flex items-center justify-between gap-x-6 py-5 hover:bg-gray-50 px-2 rounded-md"
            >
              <div className="flex min-w-0 gap-x-4">
                <span className="text-2xl font-bold text-gray-400 w-8 text-center">
                  {bill.rank}
                </span>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    <Link
                      href={`/bill/${bill.congress}/${bill.type}/${bill.number}`}
                      className="hover:underline"
                    >
                      {bill.title}
                    </Link>
                  </p>
                  <div className="mt-1 flex items-center gap-x-4 text-xs leading-5 text-gray-500">
                    <div className="flex items-center gap-x-1">
                      <ScrollText className="h-4 w-4" />
                      <span>{formatCongress(bill.congress)}</span>
                    </div>
                    {/* <div className="flex items-center gap-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{bill.discussions} Discussions</span>
                    </div> */}
                    <div className="flex items-center gap-x-1">
                      <Pencil className="h-4 w-4" />
                      <span>{getBillTypeAlias(bill.type)}</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <Hash className="h-4 w-4" />
                      <span>{bill.number}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={`/bill/${bill.congress}/${bill.type}/${bill.number}`}
                className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 flex-shrink-0"
              >
                View Bill
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default TrendingBills;
