export const billData = {
  congress: 117,
  billType: "HR",
  billNumber: 3684,
  title: "Infrastructure Investment and Jobs Act",
  isLaw: true,
  billTabProps: {
    summary:
      "This act makes supplemental appropriations for fiscal year 2021 to provide for making investments in the Nation's infrastructure and for other purposes. The act provides funding for a wide range of projects, including roads and bridges, public transit, rail, airports, ports, water systems, and the electric grid. It also includes provisions to expand broadband internet access, promote cybersecurity, and address climate change.",
    pdfUrl: "https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf",
    metadata: {
      originChamber: "House",
      latestAction: {
        text: "Became Public Law No: 117-58.",
        date: "2021-11-15",
      },
      policyArea: "Transportation and Public Works",
      introductionDate: "2021-06-04",
    },
  },
  actions: [
    {
      type: "BecameLaw",
      text: "Became Public Law No: 117-58.",
      date: "2021-11-15",
    },
    { type: "President", text: "Signed by President.", date: "2021-11-15" },
    { type: "President", text: "Presented to President.", date: "2021-11-08" },
    {
      type: "ResolvingDifferences",
      text: "Message on Senate action sent to the House.",
      date: "2021-08-10",
    },
    {
      type: "Floor",
      text: "Passed Senate with an amendment by Yea-Nay Vote. 69 - 30. Record Vote Number: 314.",
      date: "2021-08-10",
    },
    {
      type: "Floor",
      text: "Measure laid before Senate by unanimous consent.",
      date: "2021-08-01",
    },
    {
      type: "Committee",
      text: "Committee on the Budget. Action favorable.",
      date: "2021-07-28",
    },
    { type: "IntroReferral", text: "Introduced in House", date: "2021-06-04" },
  ],
  amendments: [
    {
      number: "2137",
      description: "In the nature of a substitute.",
      purpose: "To substitute the text of the bill with a new version.",
      type: "SAMDT",
      date: "2021-08-01",
      latestAction: {
        text: "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 67 - 27. Record Vote Number: 292.",
        date: "2021-08-01",
      },
    },
    {
      number: "99",
      description: "To strike a provision related to funding for research.",
      purpose: "To remove section 501 of the bill.",
      type: "HAMDT",
      date: "2021-07-29",
      latestAction: {
        text: "Amendment HA 99 failed in House by voice vote.",
        date: "2021-07-29",
      },
    },
  ],
  sponsors: [
    { name: "Peter A. DeFazio", party: "D", state: "OR", icon: "donkey" },
  ],
  cosponsors: [
    { name: "John Yarmuth", party: "D", state: "KY", icon: "donkey" },
    { name: "Kay Granger", party: "R", state: "TX", icon: "elephant" },
    { name: "Sam Graves", party: "R", state: "MO", icon: "elephant" },
    { name: "Don Young", party: "R", state: "AK", icon: "elephant" },
    { name: "Dina Titus", party: "D", state: "NV", icon: "donkey" },
    { name: "Angus King", party: "I", state: "ME", icon: "balance" },
  ],
  relatedBills: [
    {
      title: "INVEST in America Act",
      congress: 117,
      type: "HR",
      number: 3684,
      latestAction: {
        text: "Placed on the Union Calendar, Calendar No. 85.",
        date: "2021-06-29",
      },
    },
    {
      title: "Surface Transportation Reauthorization Act of 2021",
      congress: 117,
      type: "S",
      number: 1931,
      latestAction: {
        text: "Read the second time. Placed on Senate Legislative Calendar under General Orders. Calendar No. 71.",
        date: "2021-05-27",
      },
    },
  ],
};

export const discussions = [
  {
    id: "1",
    title: "Clarification on Section 301 funding allocation",
    author: "civicHacker",
    createdAt: "2025-06-29",
    replyCount: 5,
  },
  {
    id: "2",
    title: "Potential impact on small businesses",
    author: "policyAnalyst22",
    createdAt: "2025-06-26",
    replyCount: 12,
  },
  {
    id: "3",
    title: "Question about the implementation timeline",
    author: "concernedCitizen",
    createdAt: "2025-06-24",
    replyCount: 3,
  },
];

export const billStats = {
  watchers: 10,
  stars: 16,
};

export const billTypeData = [
  {
    title: "Surface Transportation Reauthorization Act of 2021",
    congress: 119,
    type: "S",
    number: 1931,
    latestAction: {
      text: "Read the second time. Placed on Senate Legislative Calendar under General Orders. Calendar No. 71.",
      date: "2021-05-27",
    },
  },
  {
    title: "Clean Energy Innovation and Deployment Act of 2023",
    congress: 119,
    type: "S",
    number: 847,
    latestAction: {
      text: "Referred to the Committee on Energy and Natural Resources.",
      date: "2023-03-15",
    },
  },
  {
    title: "American Workforce Enhancement Act",
    congress: 119,
    type: "S",
    number: 1205,
    latestAction: {
      text: "Committee on Judiciary. Ordered to be reported with an amendment in the nature of a substitute favorably.",
      date: "2023-06-22",
    },
  },
  {
    title: "Medicare Drug Price Negotiation Act of 2023",
    congress: 119,
    type: "S",
    number: 674,
    latestAction: {
      text: "Read twice and referred to the Committee on Finance.",
      date: "2023-03-08",
    },
  },
  {
    title: "Small Business Cybersecurity Enhancement Act",
    congress: 119,
    type: "S",
    number: 1398,
    latestAction: {
      text: "Passed Senate without amendment by Unanimous Consent.",
      date: "2023-09-12",
    },
  },
  {
    title: "Veterans' Mental Health Care Access Act",
    congress: 119,
    type: "S",
    number: 892,
    latestAction: {
      text: "Committee on Veterans' Affairs. Hearings held.",
      date: "2023-05-17",
    },
  },
  {
    title: "Rural Broadband Acceleration Act of 2023",
    congress: 119,
    type: "S",
    number: 1067,
    latestAction: {
      text: "Read twice and referred to the Committee on Commerce, Science, and Transportation.",
      date: "2023-04-03",
    },
  },
  {
    title: "Student Loan Interest Rate Reduction Act",
    congress: 119,
    type: "S",
    number: 1543,
    latestAction: {
      text: "Read twice and referred to the Committee on Health, Education, Labor, and Pensions.",
      date: "2023-07-19",
    },
  },
  {
    title: "Climate Resilient Infrastructure Act of 2023",
    congress: 119,
    type: "S",
    number: 1789,
    latestAction: {
      text: "Referred to the Committee on Environment and Public Works.",
      date: "2023-08-02",
    },
  },
  {
    title: "Affordable Housing Development Act",
    congress: 119,
    type: "S",
    number: 2134,
    latestAction: {
      text: "Committee on Banking, Housing, and Urban Affairs. Ordered to be reported without amendment favorably.",
      date: "2023-10-26",
    },
  },
  {
    title: "National AI Safety and Security Act",
    congress: 119,
    type: "S",
    number: 1876,
    latestAction: {
      text: "Read twice and referred to the Committee on Homeland Security and Governmental Affairs.",
      date: "2023-09-07",
    },
  },
  {
    title: "Prescription Drug Importation Act of 2023",
    congress: 119,
    type: "S",
    number: 2298,
    latestAction: {
      text: "Read twice and referred to the Committee on Health, Education, Labor, and Pensions.",
      date: "2023-11-14",
    },
  },
  {
    title: "Economic Security for Seniors Act",
    congress: 119,
    type: "S",
    number: 1621,
    latestAction: {
      text: "Committee on Finance. Reported by Senator Wyden with an amendment in the nature of a substitute.",
      date: "2023-08-31",
    },
  },
];
