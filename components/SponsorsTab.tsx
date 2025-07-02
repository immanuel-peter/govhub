export interface Sponsor {
  name: string;
  party: string;
  state: string;
}

interface SponsorsTabProps {
  sponsors: Sponsor[];
  cosponsors: Sponsor[];
}

const PartyIcon = ({ party }: { party: string }) => {
  let colorClass = "text-gray-500";

  if (party === "D") {
    colorClass = "text-blue-600";
  } else if (party === "R") {
    colorClass = "text-red-600";
  } else {
    colorClass = "text-gray-500";
  }

  return (
    <span
      className={`w-6 h-6 inline-flex items-center justify-center font-bold text-lg ${colorClass}`}
    >
      {party || "I"}
    </span>
  );
};

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="p-3 border border-gray-200 rounded-lg flex items-center space-x-3 bg-white">
    <PartyIcon party={sponsor.party} />
    <p className="font-semibold text-gray-800">{sponsor.name}</p>
    <p className="px-2 bg-gray-200 text-sm text-gray-500 rounded-full">
      {sponsor.state}
    </p>
  </div>
);

const SponsorsTab = ({ sponsors, cosponsors }: SponsorsTabProps) => {
  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-[600px]">
      {sponsors.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sponsors ({sponsors.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sponsors</h2>
          <p className="text-gray-600">No sponsors found for this bill.</p>
        </div>
      )}
      {cosponsors.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Cosponsors ({cosponsors.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cosponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorsTab;
