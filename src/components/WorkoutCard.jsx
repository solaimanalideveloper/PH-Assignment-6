import Image from "next/image";
import React from "react";
import { Clock, Flame, Star } from "lucide-react";
import Link from "next/link";

const WorkoutCard = ({ workoutData }) => {
  const { name, image, equipment, duration, caloriesBurned, rating, id } =
    workoutData;

  return (
    <Link href={`/workout/${id}`} className="block">
      <div className="card bg-base-100 shadow-sm max-h-135">
        <figure>
          <Image
            src={image}
            alt="Ui fetching the image"
            width={500}
            height={100}
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-2">
            {workoutData.muscleGroups.map((groups) => (
              <span
                key={groups}
                className="bg-[#C2F800] text-black text-xs font-bold uppercase px-3 py-1 rounded-full "
              >
                {groups}
              </span>
            ))}
          </div>
          <h2 className="card-title text-white font-bold uppercase text-4.5 my-2">
            {name}
          </h2>
          <p className="text-[#9CA3AF]">{equipment}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-1">
              <Clock size={16} />
              {duration} min
            </p>
            <p className="flex items-center gap-1">
              <Flame size={16} className="text-[#9CA3AF] fill-[#9CA3AF]" />
              {caloriesBurned} kcal
            </p>
            <p className="flex items-center gap-1">
              <Star size={16} className="text-lime-400 fill-lime-400" />
              {rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
