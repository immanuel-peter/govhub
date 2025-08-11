import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* What is GovHub? */}
          <section className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              What is GovHub?
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              GovHub is a civic technology prototype built to enhance public
              participation in the legislative process. In a time when citizens
              are overwhelmed by misinformation and disconnected from how laws
              are made, GovHub offers a modern interface for following bills,
              understanding changes, and engaging in constructive discussion—all
              powered by the Congress.gov API.
            </p>
          </section>

          {/* Prototype Features */}
          <section className="mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Prototype Features
            </h1>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                GovHub leverages the congress.gov Bill API to dynamically
                retrieve comprehensive information about any bill in U.S.
                history. Each bill page offers a wealth of data including a
                concise summary, its origin chamber, the latest legislative
                action, relevant policy areas, and its introduction date. More
                extensive information available from the API can be later
                integrated.
              </p>
              <p>
                Beyond basic information, GovHub fosters civic discussion by
                providing a dedicated discussion section for each bill, similar
                to the familiar interface of GitHub. This feature aims to
                encourage more focused and substantive policy discussions,
                offering an alternative to the fragmented conversations often
                found on general social networks. Furthermore, legislative
                actions, amendments, sponsors, and related bills are
                meticulously tracked and updated in real-time. Users also have
                the ability to track their favorite and interesting bills.
              </p>
            </div>
          </section>

          {/* This Has Been Done Before */}
          <section className="mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              This Has Been Done Before
            </h1>

            {/* Precedent: ArXiv & AlphaXiv */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Precedent: ArXiv & AlphaXiv
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <p className="mb-2">
                    <strong>1. ArXiv:</strong> For decades, ArXiv has been the
                    definitive digital archive for scientific research. However,
                    it has only been a one-way repository for research, making
                    its primary function archival.
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong>2. AlphaXiv:</strong> AlphaXiv introduced a paradigm
                    shift by building a dynamic ecosystem around ArXiv's static
                    content. It did not replace ArXiv but layered on new
                    capabilities that transformed its value.
                  </p>
                  <ul className="list-disc ml-8 space-y-2">
                    <li>
                      <strong>Social Dimension:</strong> It introduced
                      discussion forums for each paper, user profiles, and the
                      ability to follow researchers, turning the monologue of
                      publishing into a global scientific dialogue.
                    </li>
                    <li>
                      <strong>AI Capabilities:</strong> It integrated AI to
                      provide summaries of complex papers and recommend related
                      research, making the archive more useful to non-scientific
                      scholars.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision: Congress.gov & GovHub */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Vision: Congress.gov & GovHub
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <p className="mb-2">
                    <strong>1. Congress.gov:</strong> Congress.gov is the
                    repository for all US legislation. However, like ArXiv, it's
                    primary function is archival due to its read-only
                    interactivity.
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong>2. GovHub:</strong> GovHub is the AlphaXiv for
                    Congress.gov. We wrap the foundational data in a better UX
                    to enable better civic engagement.
                  </p>
                  <ul className="list-disc ml-8 space-y-2">
                    <li>
                      <strong>Social Dimension:</strong> We provide a dedicated
                      repository for every bill, complete with discussion
                      threads, timelines, and the ability for users to "Watch"
                      and "Star" legislation.
                    </li>
                    <li>
                      <strong>AI Capabilities:</strong> The roadmap would
                      include building an intelligence layer to provide "plain
                      English" summaries of dense legal text, analyze the impact
                      of amendments, and gauge public sentiment from
                      discussions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* More importantly... */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                More importantly...
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  AlphaXiv has support from Stanford AI Lab, helping it earn
                  credibility in the machine learning community. Soon, it gained
                  the respect of the brightest minds in the field like Yann
                  LeCun and Sebastian Thrun.
                </p>
                <p>
                  With the support of the UChicago IOP, GovHub can fundamentally
                  reimagine healthy civic participation. Imagine:
                </p>
                <ul className="list-disc ml-8 space-y-2">
                  <li>
                    Congress members interacting directly with their
                    constituents
                  </li>
                  <li>
                    Congress members get grilled by the public, leading to
                    direct policy outcome
                  </li>
                  <li>
                    Mobile voting becoming a reality through premiere leadership
                    of the IOP
                  </li>
                  <li>
                    Supporting political science scholars, similar to how GitHub
                    supports software developers
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Next Steps
            </h1>
            <ul className="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>Enhanced Document Viewing</strong>: Implement robust
                support for rendering bill PDFs directly within the platform.
              </li>
              <li>
                <strong>Public Sentiment Analysis</strong>: Introduce
                upvote/downvote functionality on bill pages to reflect public
                sentiment and engagement.
              </li>
              <li>
                <strong>Stateful Application</strong>: Develop a comprehensive
                database schema to make GovHub stateful, enabling advanced user
                features and data persistence.
              </li>
              <li>
                <strong>Advanced Pagination</strong>: Provide robust pagination
                capabilities for bills, allowing filtering by congress or bill
                type, as well as for the actions and amendments associated with
                a bill.
              </li>
              <li>
                <strong>Email Notifications</strong>: Integrate email
                notification support to keep users informed about legislative
                updates and discussions.
              </li>
              <li>
                <strong>Dedicated Amendments Page</strong>: Create a dedicated,
                user-friendly page for amendments, presenting all relevant and
                useful information in an organized manner.
              </li>
              <li>
                <strong>Congressional Member Profiles</strong>: Develop
                individual profile pages for Congress members. In the future,
                this could evolve to include direct feedback boards, enabling
                direct interaction between Congress members and their
                constituents through the GovHub platform.
              </li>
              <li>
                <strong>User Profile Pages</strong>: Introduce personalized user
                profile pages to enhance the social dimension of the platform.
              </li>
              <li>
                <strong>AI-Powered Insights</strong>: Integrate advanced AI
                capabilities to provide concise, plain-English summaries of
                complex legal texts, analyze the potential impact of amendments,
                and gauge public sentiment from discussion threads.
              </li>
            </ul>
          </section>

          {/* Interested? */}
          <section>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Interested?
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Feel free to email{" "}
              <a
                href="mailto:ipeter@uchicago.edu?subject=Interested%20in%20GovHub"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                ipeter@uchicago.edu
              </a>{" "}
              if you're interested in providing feedback, sharing ideas, or
              engineering a next-gen civic platform!
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
