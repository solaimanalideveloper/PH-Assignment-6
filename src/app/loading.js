import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-black text-white gap-3">
        <p className="animate-pulse">Loading workouts…</p>
        <span className="loading loading-spinner text-success"></span>
      </div>
    </div>
  );
};

export default Loading;
