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
      number: "SA 2137",
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
      number: "HA 99",
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
