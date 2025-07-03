import type { Metadata } from "next";
import "@/app/globals.css";
import { fetchSpecificBill } from "@/lib/fetchers/fetchBill";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ congress: string; bill_type: string; bill_num: string }>;
}) => {
  const { congress, bill_type, bill_num } = await params;
  const billData = await fetchSpecificBill(
    parseInt(congress),
    bill_type,
    parseInt(bill_num)
  );
  return {
    title: `${billData.title} | GovHub`,
    description: billData.billTabProps.summary,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
