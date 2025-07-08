import { Loader2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const LoadingPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 min-h-[calc(100vh-150px)]">
        <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
          <Loader2 className="mx-auto h-16 w-16 text-blue-500 animate-spin" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Loading
          </h1>
          <p className="mt-4 text-base text-gray-600">
            Please wait...
          </p>
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoadingPage; 