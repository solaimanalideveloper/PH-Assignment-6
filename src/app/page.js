import Hero from "@/components/Hero";
import LibrarySection from "@/components/LibrarySection";

export default async function Home() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workoutCardData = await res.json();

  return (
    <div className="bg-[#000000]">
      <div className="container mx-auto">
        <Hero></Hero>
        <LibrarySection workoutCardData={workoutCardData}></LibrarySection>
      </div>
    </div>
  );
}
