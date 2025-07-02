// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { formatCongress } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
