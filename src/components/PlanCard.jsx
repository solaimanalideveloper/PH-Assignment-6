// src/components/PlanCard.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { toast } from "react-toastify";

export default function PlanCard({ workout, listType }) {
  const { removeFromPlan, removeFromSaved, markDone } = usePlan();

  const handleRemove = () => {
    listType === "today"
      ? removeFromPlan(workout.id)
      : removeFromSaved(workout.id);
    toast.success("Removed");
  };

  const handleDone = () => {
    markDone(workout.id);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#151922] rounded-lg p-4">
      <div className="flex items-center gap-4">
        <Image
          src={workout.image}
          alt={workout.name}
          width={80}
          height={80}
          className="rounded-md object-cover w-20 h-20 shrink-0"
        />
        <div className="flex-1 min-w-0">
          {" "}
          <h3 className="text-white font-bold uppercase text-sm sm:text-base">
            {workout.name}
          </h3>
          <p className="text-[#9CA3AF] text-xs sm:text-sm">
            {workout.equipment}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-[#9CA3AF] mt-1">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {workout.duration} min
            </span>
            <span className="flex items-center gap-1">
              <Flame size={14} /> {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <Star size={14} /> {workout.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:ml-auto flex-wrap">
        <Link
          href={`/workout/${workout.id}`}
          className="px-3 py-2 border border-[#2A2A2A] rounded-md text-xs sm:text-sm text-white whitespace-nowrap"
        >
          View Details
        </Link>

        {listType === "today" && (
          <button
            onClick={handleDone}
            className="flex items-center gap-1 px-3 py-2 bg-[#ccff00] text-black rounded-md text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer"
          >
            <Check size={14} />
            {workout.done ? "Mark as Done" : "Mark as Done"}
          </button>
        )}

        <button onClick={handleRemove} className="p-2 cursor-pointer">
          <X size={25} />
        </button>
      </div>
    </div>
  );
}
