import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-black text-white px-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-[#9CA3AF] mb-6">Not Found the Page</p>
        <Link
          href="/"
          className="bg-[#ccff00] text-black px-6 py-3 rounded-full font-bold"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
