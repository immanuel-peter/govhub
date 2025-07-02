import { Action } from "@/components/ActionsTab";
import { Amendment } from "@/components/AmendmentsTab";
import { BillData as BillDataType } from "@/components/BillComponent";
import { Sponsor } from "@/components/SponsorsTab";

const BASE_URL = "https://api.congress.gov/v3";
const API_KEY = process.env.CONGRESS_API_KEY;

export const fetchBill = async (
  congress: number,
  bill_type?: string
): Promise<BillDataType[]> => {
  const url = bill_type
    ? `${BASE_URL}/bill/${congress}/${bill_type}`
    : `${BASE_URL}/bill/${congress}`;
  const response = await fetch(
    `${url}?api_key=${API_KEY}&sort=updateDate+desc&format=json`
  );
  const data = await response.json();
  const bills: BillDataType[] = data.bills.map((bill: any) => ({
    title: bill.title,
    congress: bill.congress,
    type: bill.type,
    number: bill.number,
    latestAction: {
      text: bill.latestAction?.text || "",
      date: bill.latestAction?.actionDate || "",
    },
  }));
  return bills;
};

export const fetchSpecificBill = async (
  congress: number,
  bill_type: string,
  bill_number: number
) => {
  const url = `${BASE_URL}/bill/${congress}/${bill_type}/${bill_number}?api_key=${API_KEY}&format=json`;
  const response = await fetch(url);
  const data = await response.json();

  const {
    type: billType,
    number: billNumber,
    title,
    congress: billCongress,
    laws,
    originChamber,
    latestAction,
    policyArea,
    introducedDate,
  } = data.bill;

  // Run async operations in parallel
  const [
    summary,
    pdfUrl,
    actions,
    amendments,
    sponsors,
    cosponsors,
    relatedBills,
  ] = await Promise.all([
    fetchBillSummary(congress, bill_type, bill_number),
    fetchBillPdfUrl(congress, bill_type, bill_number),
    fetchBillActions(congress, bill_type, bill_number),
    fetchBillAmendments(congress, bill_type, bill_number),
    fetchBillSponsors(congress, bill_type, bill_number, "sponsor"),
    fetchBillSponsors(congress, bill_type, bill_number, "cosponsor"),
    fetchBillRelatedBills(congress, bill_type, bill_number),
  ]);

  return {
    congress: billCongress,
    billType,
    billNumber,
    title,
    isLaw: Array.isArray(laws) && laws.length > 0,
    billTabProps: {
      summary,
      pdfUrl,
      metadata: {
        originChamber,
        latestAction: {
          text: latestAction?.text ?? "",
          date: latestAction?.actionDate ?? "",
        },
        policyArea: policyArea?.name ?? "",
        introductionDate: introducedDate,
      },
    },
    actions,
    amendments,
    sponsors,
    cosponsors,
    relatedBills,
  };
};

const fetchBillSummary = async (
  congress: number,
  bill_type: string,
  bill_number: number
): Promise<string> => {
  const url = `${BASE_URL}/bill/${congress}/${bill_type}/${bill_number}/summaries?api_key=${API_KEY}&format=json`;
  const response = await fetch(url);
  const data = await response.json();

  const summaries = data.summaries;

  if (!Array.isArray(summaries) || summaries.length === 0) {
    return "";
  }

  const latestSummary = summaries
    .slice()
    .sort(
      (a: any, b: any) =>
        new Date(b.actionDate).getTime() - new Date(a.actionDate).getTime()
    )[0];

  return latestSummary?.text || "";
};

const fetchBillPdfUrl = async (
  congress: number,
  bill_type: string,
  bill_number: number
): Promise<string> => {
  const url = `${BASE_URL}/bill/${congress}/${bill_type}/${bill_number}/text?api_key=${API_KEY}&format=json`;
  const response = await fetch(url);
  const data = await response.json();

  const textVersions = data.textVersions ?? [];

  if (textVersions.length === 0) {
    return "";
  }

  const firstVersion = textVersions[0];
  const pdfFormat = firstVersion.formats?.find(
    (format: { type: string }) => format.type === "PDF"
  );

  return pdfFormat?.url ?? "";
};

const fetchBillActions = async (
  congress: number,
  bill_type: string,
  bill_number: number
): Promise<Action[]> => {
  const url = `${BASE_URL}/bill/${congress}/${bill_type}/${bill_number}/actions?api_key=${API_KEY}&format=json`;
  const response = await fetch(url);
  const data = await response.json();

  const rawActions = Array.isArray(data.actions) ? data.actions : [];

  return rawActions.map(
    (action: any): Action => ({
      type: action.type,
      date: action.actionDate,
      text: action.text,
    })
  );
};

const fetchBillAmendments = async (
  congress: number,
  bill_type: string,
  bill_number: number
): Promise<Amendment[]> => {
  const url = `${BASE_URL}/bill/${congress}/${bill_type}/${bill_number}/amendments?api_key=${API_KEY}&format=json`;
  const response = await fetch(url);
  const data = await response.json();

  const rawAmendments = Array.isArray(data.amendments) ? data.amendments : [];

  const amendments: Amendment[] = await Promise.all(
    rawAmendments.map(async (amendment: any) => ({
      number: amendment.number,
      description: amendment.description,
      purpose: await fetchAmendmentPurpose(amendment.url),
      type: amendment.type === "HAMDT" ? "House Amendment" : "Senate Amendment",
      date: amendment.updateDate,
      latestAction: {
        text: amendment.latestAction?.text || "",
        date: amendment.latestAction?.actionDate || "",
      },
    }))
  );

  return amendments;
};

const fetchAmendmentPurpose = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const data = await response.json();
  return data.amendment?.purpose || "";
};

const fetchBillSponsors = async (
  congress: number,
  bill_type: string,
  bill_number: number,
  sponsor_type: "sponsor" | "cosponsor"
): Promise<Sponsor[]> => {
  const url = `${BASE_URL}/bill/${congress}/${bill_type}/${bill_number}/cosponsors?api_key=${API_KEY}&format=json`;
  const response = await fetch(url);
  const data = await response.json();

  const cosponsors = Array.isArray(data.cosponsors) ? data.cosponsors : [];

  const isOriginal = sponsor_type === "sponsor";

  const sponsors: Sponsor[] = cosponsors
    .filter((sponsor: any) => sponsor.isOriginalCosponsor === isOriginal)
    .map((sponsor: any) => ({
      name: `${sponsor.firstName} ${sponsor.lastName}`,
      party: sponsor.party,
      state: sponsor.state,
    }));

  return sponsors;
};

const fetchBillRelatedBills = async (
  congress: number,
  bill_type: string,
  bill_number: number
): Promise<BillDataType[]> => {
  const url = `${BASE_URL}/bill/${congress}/${bill_type}/${bill_number}/relatedbills?api_key=${API_KEY}&format=json`;
  const response = await fetch(url);
  const data = await response.json();

  const related = Array.isArray(data.relatedBills) ? data.relatedBills : [];

  return related.map(
    (bill: any): BillDataType => ({
      title: bill.title,
      congress: bill.congress,
      type: bill.type,
      number: bill.number,
      latestAction: {
        text: bill.latestAction?.text ?? "",
        date: bill.latestAction?.actionDate ?? "",
      },
    })
  );
};
