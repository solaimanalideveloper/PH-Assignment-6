import Image from "next/image";
import React from "react";
import FooterLogo from "../../public/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#090A0D]">
      <div className="flex justify-between container mx-auto p-10 text-center">
        <div className="flex gap-3">
          <Image
            src={FooterLogo}
            alt="Footer Logo Image"
            width={20}
            height={20}
          ></Image>
          <h2 className="text-[#FFFFFF]">FITLOG</h2>
        </div>
        <p className="text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </div>
  );
};

export default Footer;
