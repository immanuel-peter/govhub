import type { Metadata } from "next";
import "@/app/globals.css";
import { formatCongress, getBillTypeAlias } from "@/lib/utils";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ congress: string; bill_type: string }>;
}) => {
  const { congress, bill_type } = await params;
  return {
    title: `${formatCongress(parseInt(congress))} ${getBillTypeAlias(
      bill_type
    )} Bills`,
    description: `${formatCongress(parseInt(congress))} ${getBillTypeAlias(
      bill_type
    )} Bills`,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
