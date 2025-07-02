import NotFoundPage from "@/app/not-found";
import DiscussionPageComponent from "@/components/DiscussionPageComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DiscussionPage = async ({
  params,
}: {
  params: Promise<{ discussion_id: string }>;
}) => {
  const { discussion_id } = await params;
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <DiscussionPageComponent />
      <Footer />
    </div>
  );
};

export default DiscussionPage;
