"use client";

import { ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext"; // 🆕
import PlanCard from "@/components/PlanCard";

const MyPlanPage = () => {
  const { planItems, savedItems, hydrated } = usePlan();
  const [activeTab, setActiveTab] = useState("today");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Duration");

  const sortOptions = ["Duration", "Calories", "Rating"];
  const currentList = activeTab === "today" ? planItems : savedItems;

  const metrics = [
    { label: "Exercises", value: planItems.length, highlight: true },
    {
      label: "Minutes",
      value: planItems.reduce((sum, w) => sum + Number(w.duration), 0),
      highlight: false,
    },
    {
      label: "Calories",
      value: planItems.reduce((sum, w) => sum + Number(w.caloriesBurned), 0),
      highlight: false,
    },
  ];

  const sortedList = [...currentList].sort((a, b) => {
    const key =
      sortBy.toLowerCase() === "calories"
        ? "caloriesBurned"
        : sortBy.toLowerCase();
    return b[key] - a[key];
  });

  if (!hydrated)
    return <p className="text-white text-center py-20">Loading workouts…</p>;

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <h1 className="font-bold text-3xl text-white">MY PLAN</h1>
        <p className="text-[#8A92A0] mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}
        <div className="flex justify-between bg-[#232732] py-5 px-8 rounded-lg mt-8">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-[#8A92A0] text-sm mb-1">{metric.label}</p>
              <h2
                className={`text-4xl font-bold ${
                  metric.highlight ? "text-[#C2F800]" : "text-white"
                }`}
              >
                {metric.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Tabs + Sort */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex bg-[#1A1F2B] rounded-full p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                activeTab === "today"
                  ? "bg-[#2A2F3B] text-white font-bold"
                  : "text-[#8A92A0]"
              }`}
            >
              Today`s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                activeTab === "saved"
                  ? "bg-[#2A2F3B] text-white font-bold"
                  : "text-[#8A92A0]"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="relative flex items-center gap-2 text-[#8A92A0] text-sm ">
            <span>Sort By</span>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 border border-[#2A2A2A] rounded-md px-3 py-1.5 text-white min-w-30 justify-between"
            >
              {sortBy}
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  sortOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {sortOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#1A1F2B] border border-[#2A2A2A] rounded-md overflow-hidden w-40 z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setSortOpen(false);
                    }}
                    className="flex items-center justify-between w-full px-4 py-2.5 text-left text-white hover:bg-[#2A2F3B]"
                  >
                    {option}
                    {sortBy === option && (
                      <Check size={16} className="text-[#C2F800]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Empty state */}
        {sortedList.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-white text-2xl font-bold">NOTHING HERE YET</h2>
            <p className="text-[#9CA3AF] mt-2">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="inline-block mt-6 bg-[#ccff00] text-black px-6 py-3 rounded-full font-bold"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4 mt-6">
            {sortedList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                listType={activeTab}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
