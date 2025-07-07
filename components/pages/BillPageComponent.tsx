"use client";

import { ReactNode } from "react";
import Link from "next/link";
import {
  FileText,
  MessageSquare,
  List,
  FilePlus,
  Users,
  Link,
} from "lucide-react";

import { Discussion } from "../bill/tabs/Discussion";
import { Action } from "../bill/tabs/ActionsTab";
import { Amendment } from "../bill/tabs/AmendmentsTab";
import { Sponsor } from "../bill/tabs/SponsorsTab";
import { BillTabProps } from "../bill/tabs/BillTab";
import { BillData as BillDataType } from "../bill/BillComponent";
import Header, { BillStats } from "../layout/Header";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

interface BillData {
  congress: number;
  billType: string;
  billNumber: number;
  title: string;
  isLaw: boolean;
  billTabProps: BillTabProps;
  actions: Action[];
  amendments: Amendment[];
  sponsors: Sponsor[];
  cosponsors: Sponsor[];
  relatedBills: BillDataType[];
}

interface TabProps {
  icon: ReactNode;
  label: string;
  href: string;
  active: boolean;
}

const Tab = ({ icon, label, href, active }: TabProps) => (
  <Link
    href={href}
    className={`flex items-center px-4 py-2 text-sm font-medium border-b-2 cursor-pointer ${
      active
        ? "border-orange-500 text-gray-900"
        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </Link>
);

const BillPageComponent = ({
  billData,
  discussions,
  stats,
  currentTab,
  children,
}: {
  billData: BillData;
  discussions: Discussion[];
  stats: BillStats;
  currentTab: string;
  children: ReactNode;
}) => {
  const {
    billTabProps,
    actions,
    amendments,
    sponsors,
    cosponsors,
    relatedBills,
  } = billData;
  const { summary, pdfUrl, metadata } = billTabProps;

  const basePath = `/bill/${billData.congress}/${billData.billType}/${billData.billNumber}`;

  const tabs = [
    { name: "Bill", icon: <FileText className="w-5 h-5" />, href: basePath },
    {
      name: "Discussion",
      icon: <MessageSquare className="w-5 h-5" />,
      href: `${basePath}/discussions`,
    },
    { name: "Actions", icon: <List className="w-5 h-5" />, href: `${basePath}/actions` },
    {
      name: "Amendments",
      icon: <FilePlus className="w-5 h-5" />,
      href: `${basePath}/amendments`,
    },
    { name: "Sponsors", icon: <Users className="w-5 h-5" />, href: `${basePath}/sponsors` },
    {
      name: "Related Bills",
      icon: <Link className="w-5 h-5" />,
      href: `${basePath}/related-bills`,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <Header
        congress={billData.congress}
        billType={billData.billType}
        billNumber={billData.billNumber}
        title={billData.title}
        isLaw={billData.isLaw}
        stats={stats}
      />

      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                icon={tab.icon}
                label={tab.name}
                href={tab.href}
                active={currentTab === tab.name}
              />
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>

      <Footer />
    </div>
  );
};

export default BillPageComponent;
