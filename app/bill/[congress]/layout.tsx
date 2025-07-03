import type { Metadata } from "next";
import "@/app/globals.css";
import { formatCongress } from "@/lib/utils";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ congress: string }>;
}) => {
  const { congress } = await params;
  return {
    title: `${formatCongress(parseInt(congress))} Bills`,
    description: `${formatCongress(parseInt(congress))} Bills`,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
