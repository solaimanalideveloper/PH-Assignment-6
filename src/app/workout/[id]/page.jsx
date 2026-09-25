import Image from "next/image";
import React from "react";
import WorkoutActions from "@/components/WorkoutActions";

const WorkoutDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const workoutData = await res.json();

  const {
    name,
    image,
    description,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = workoutData;

  const stats = [
    { label: "EQUIPMENT", value: equipment },
    { label: "DIFFICULTY", value: difficulty },
    { label: "SETS", value: sets },
    { label: "REPS", value: reps },
    { label: "DURATION", value: `${duration} min` },
    { label: "CALORIES", value: `${caloriesBurned} kcal` },
    { label: "RATING", value: rating },
  ];

  return (
    <>
      <div className="bg-black ">
        <div className="my-12">
          <div className="card lg:card-side bg-black shadow-sm container mx-auto px-20 flex gap-15">
            <figure className="rounded-2xl ">
              <Image src={image} alt="Album" width={500} height={600} />
            </figure>

            <div className="">
              <h2 className="card-title font-bold text-white text-4xl mt-3">
                {name}
              </h2>
              <p className="text-[#9CA3AF] mt-3">{description}</p>
              {
                <div className="flex gap-2 mt-4">
                  {workoutData.muscleGroups.map((groups) => (
                    <span
                      key={groups}
                      className="bg-[#C2F800] text-black text-xs font-bold uppercase px-3 py-1 rounded-full "
                    >
                      {groups}
                    </span>
                  ))}
                </div>
              }

              {
                <div className="border border-[#2A2A2A] rounded-lg overflow-hidden bg-[#151922] mt-8">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`flex justify-between items-center px-6 py-4 ${
                        index !== stats.length - 1
                          ? "border-b border-[#2A2A2A]"
                          : ""
                      }`}
                    >
                      <span className="text-[#9CA3AF] text-sm font-semibold tracking-wide">
                        {stat.label}
                      </span>
                      <span className="text-white text-sm font-medium">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              }

              {
                <div className="mt-8">
                  <h3 className="text-white font-bold uppercase text-lg mb-4 tracking-wide">
                    Instructions
                  </h3>
                  <ol className="space-y-3">
                    {instructions.map((step, index) => (
                      <li key={index} className="flex gap-3 text-[#9CA3AF]">
                        <span className="text-white font-semibold">
                          {index + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              }

              <WorkoutActions workout={workoutData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutDetailPage;
