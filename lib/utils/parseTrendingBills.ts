import { JSDOM } from "jsdom";
import axios from "axios";

export type TrendingBill = {
  congress: number;
  type:
    | "hr"
    | "s"
    | "hres"
    | "sres"
    | "hamdt"
    | "samdt"
    | "hjres"
    | "sjres"
    | "hconres"
    | "sconres";
  number: number;
  title: string;
};

const TYPE_MAP: Record<string, TrendingBill["type"]> = {
  "house-bill": "hr",
  "senate-bill": "s",
  "house-resolution": "hres",
  "senate-resolution": "sres",
  "house-amendment": "hamdt",
  "senate-amendment": "samdt",
  "house-joint-resolution": "hjres",
  "senate-joint-resolution": "sjres",
  "house-concurrent-resolution": "hconres",
  "senate-concurrent-resolution": "sconres",
};

export async function parseTrendingBills(): Promise<Record<string, TrendingBill>> {
  const res = await axios.get(
    "https://www.congress.gov/rss/most-viewed-bills.xml",
    {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    }
  );
  const xml = res.data;

  const dom = new JSDOM(xml, { contentType: "text/xml" });
  const description =
    dom.window.document.querySelector("item > description")?.textContent ?? "";

  const html = new JSDOM(description).window.document;
  const listItems = Array.from(html.querySelectorAll("li"));

  const output: Record<string, TrendingBill> = {};

  listItems.forEach((li, index) => {
    const a = li.querySelector("a");
    if (!a) return;

    const url = a.href;
    const titleText = li.textContent?.split(" - ")[1]?.trim();
    const match = url.match(/bill\/(\d+)(?:th)?-congress\/([a-z-]+)\/(\d+)/);
    if (!match) return;

    const [_, congress, rawType, number] = match;
    const type = TYPE_MAP[rawType];
    if (!type) return;

    output[(index + 1).toString()] = {
      congress: parseInt(congress),
      type,
      number: parseInt(number),
      title: titleText || "",
    };
  });

  return output;
}

