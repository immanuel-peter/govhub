import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "About | GovHub",
  description: "About GovHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
