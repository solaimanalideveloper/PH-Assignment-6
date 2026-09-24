import React from "react";
import WorkoutCard from "./WorkoutCard";

const LibrarySection = ({ workoutCardData }) => {
  //   const {} = workoutCardData;

  return (
    <div className="my-25">
      <div>
        <h1 className="text-white font-bold text-4xl">THE LIBRARY</h1>
        <p className="text-[#9CA3AF] mb-6">
          Twelve lifts covering every major muscle group.
        </p>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {workoutCardData.map((workout) => (
            <WorkoutCard key={workout.id} workoutData={workout}></WorkoutCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibrarySection;
