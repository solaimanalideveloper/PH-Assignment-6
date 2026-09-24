import Image from "next/image";
import React from "react";
import HeroImage from "../../public/assets/banner.png";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-between p-25 bg-[#15171D] rounded-2xl my-15">
        <div>
          <p className="text-[#C2F800] font-semibold mb-5">WORKOUT LIBRARY</p>
          <h1 className="text-[#FFFFFF] font-bold text-6xl md:text-6xl tracking-tight mb-5">
            TRAIN WITH INTENT. <span class="block">EVERY SET.</span>
          </h1>
          <p className="text-[#9CA3AF] mb-5">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br />
            into today`s plan, and watch the week`s work add up.
          </p>
          <button className="border rounded-2xl bg-[#C2F800] px-6 py-4 text-[#000000] font-semibold mt-6">
            BROWSE WORKOUTS
          </button>
        </div>
        <div>
          <Image
            src={HeroImage}
            alt="Hero section Image"
            width={350}
            height={400}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
