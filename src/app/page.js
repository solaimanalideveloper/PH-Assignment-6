import Hero from "@/components/Hero";
import LibrarySection from "@/components/LibrarySection";
import { getAllWorkouts } from "@/lib/api";

export const Home = async () => {
  const workoutCardData = await getAllWorkouts();

  return (
    <div className="bg-[#000000]">
      <div className="container mx-auto">
        <Hero></Hero>
        <LibrarySection workoutCardData={workoutCardData}></LibrarySection>
      </div>
    </div>
  );
};

export default Home;
