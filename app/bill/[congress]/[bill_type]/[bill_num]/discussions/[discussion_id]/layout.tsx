import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Discussion",
  description: "Discussion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
