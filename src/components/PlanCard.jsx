"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import React from "react";
import { toast } from "react-toastify";

const PlanCard = ({ workout, listType }) => {
  const { removeFromPlan, removeFromSaved, markDone } = usePlan();

  const handleRemove = () => {
    listType === "today"
      ? removeFromPlan(workout.id)
      : removeFromSaved(workout.id);
    toast.success("Removed");
  };

  const handleDone = () => {
    markDone(workout.id);
    toast.success(workout.done ? "Marked as not done" : "Marked as done");
  };

  return (
    <div className="flex items-center gap-4 bg-[#151922] rounded-lg p-4">
      <Image
        src={workout.image}
        alt={workout.name}
        width={80}
        height={80}
        className="rounded-md object-cover"
      />
      <div className="flex-1">
        <h3 className="text-white font-bold uppercase">{workout.name}</h3>
        <p className="text-[#9CA3AF] text-sm">{workout.equipment}</p>
        <div className="flex gap-4 text-sm text-[#9CA3AF] mt-1">
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
      <div className="flex gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="px-3 py-2 border rounded-md text-sm"
        >
          View Details
        </Link>
        {listType === "today" && (
          <button
            onClick={handleDone}
            className="p-2 bg-[#ccff00] text-black rounded-md"
          >
            <Check size={16} />
          </button>
        )}
        <button onClick={handleRemove} className="p-2 border rounded-md">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
