import Image from "next/image";
import React from "react";
import HeroImage from "../../public/assets/banner.png";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 p-6 sm:p-10 lg:p-25 bg-[#15171D] rounded-2xl my-8 lg:my-15">
        <div className="text-center lg:text-left">
          <p className="text-[#C2F800] font-semibold mb-5">WORKOUT LIBRARY</p>
          <h1 className="text-[#FFFFFF] font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-5 leading-tight">
            TRAIN WITH INTENT. <span className="block">EVERY SET.</span>
          </h1>
          <p className="text-[#9CA3AF] mb-5 max-w-md mx-auto lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br />
            into today`s plan, and watch the week`s work add up.
          </p>
          <button className="border rounded-2xl bg-[#C2F800] px-6 py-4 text-[#000000] font-semibold mt-6 cursor-pointer">
            BROWSE WORKOUTS
          </button>
        </div>
        <div>
          <Image
            src={HeroImage}
            alt="Hero section Image"
            className="w-55 sm:w-70 lg:w-100 h-auto"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
