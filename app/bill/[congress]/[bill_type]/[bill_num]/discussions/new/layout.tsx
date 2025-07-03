import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "New Discussion",
  description: "New Discussion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
