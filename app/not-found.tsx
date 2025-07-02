import { FileX, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 min-h-[calc(100vh-150px)]">
        <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
          <FileX className="mx-auto h-16 w-16 text-blue-500" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Lost in the Archives
          </h1>
          <p className="mt-4 text-base text-gray-600">
            It seems the document you&apos;re looking for has been misplaced or
            doesn&apos;t exist.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Home className="-ml-0.5 mr-1.5 h-5 w-5" />
              Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
