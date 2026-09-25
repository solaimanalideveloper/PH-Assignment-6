"use client";
import { CalendarPlus, Bookmark } from "lucide-react";
import toast from "react-hot-toast";
import { usePlan } from "@/context/PlanContext";
import React from "react";

const WorkoutActions = ({ workout }) => {
  const { addToPlan, addToSaved, planItems, savedItems } = usePlan();

  const handleAddToPlan = () => {
    if (planItems.length >= 5) {
      toast.error("Plan is full — max 5 lifts");
      return;
    }
    if (planItems.find((w) => w.id === workout.id)) {
      toast.error("Already in your plan");
      return;
    }
    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSave = () => {
    if (savedItems.find((w) => w.id === workout.id)) {
      toast.error("Already saved");
      return;
    }
    addToSaved(workout);
    toast.success("Saved for later");
  };

  return (
    <div className="mt-8 flex gap-4">
      <button
        onClick={handleAddToPlan}
        disabled={planItems.length >= 5}
        className="flex items-center gap-2 bg-[#ccff00] text-black px-6 py-3 rounded-full font-bold disabled:opacity-40"
      >
        <CalendarPlus size={18} /> Add to today`s plan
      </button>
      <button
        onClick={handleSave}
        className="flex items-center gap-2 border border-[#2A2A2A] text-white px-6 py-3 rounded-full font-bold"
      >
        <Bookmark size={18} /> Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;

// export default function WorkoutActions({ workout }) {}
