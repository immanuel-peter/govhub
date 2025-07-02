import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { formatCongress, getBillTypeAlias } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Bills by Type",
//   description: "Bills by Type",
// };

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
