"use client";

import { useState, ReactNode } from "react";
import {
  FileText,
  MessageSquare,
  List,
  FilePlus,
  Users,
  Link,
} from "lucide-react";

import DiscussionTab, { Discussion } from "./Discussion";
import ActionsTab, { Action } from "./ActionsTab";
import AmendmentsTab, { Amendment } from "./AmendmentsTab";
import SponsorsTab, { Sponsor } from "./SponsorsTab";
import RelatedBillsTab from "./RelatedBillsTab";
import BillTab, { BillTabProps } from "./BillTab";
import { BillData as BillDataType } from "./BillComponent";
import Header, { BillStats } from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
  active: boolean;
  onClick: () => void;
}

const Tab = ({ icon, label, active, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 text-sm font-medium border-b-2 cursor-pointer ${
      active
        ? "border-orange-500 text-gray-900"
        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

const BillPageComponent = ({
  billData,
  discussions,
  stats,
}: {
  billData: BillData;
  discussions: Discussion[];
  stats: BillStats;
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

  const [activeTab, setActiveTab] = useState("Bill");

  const tabs = [
    { name: "Bill", icon: <FileText className="w-5 h-5" /> },
    { name: "Discussion", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Actions", icon: <List className="w-5 h-5" /> },
    { name: "Amendments", icon: <FilePlus className="w-5 h-5" /> },
    { name: "Sponsors", icon: <Users className="w-5 h-5" /> },
    { name: "Related Bills", icon: <Link className="w-5 h-5" /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Discussion":
        return (
          <DiscussionTab
            congress={billData.congress}
            billType={billData.billType}
            billNumber={billData.billNumber}
            discussions={discussions}
          />
        );
      case "Actions":
        return <ActionsTab actions={actions} />;
      case "Amendments":
        return <AmendmentsTab amendments={amendments} />;
      case "Sponsors":
        return <SponsorsTab sponsors={sponsors} cosponsors={cosponsors} />;
      case "Related Bills":
        return <RelatedBillsTab relatedBills={relatedBills} />;
      case "Bill":
      default:
        return (
          <BillTab summary={summary} pdfUrl={pdfUrl} metadata={metadata} />
        );
    }
  };

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
                active={activeTab === tab.name}
                onClick={() => setActiveTab(tab.name)}
              />
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderTabContent()}
      </main>

      <Footer />
    </div>
  );
};

export default BillPageComponent;
