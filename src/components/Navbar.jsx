"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import Logo from "../../public/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const { planItems, savedItems } = usePlan();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={
            pathname === "/" ? "text-[#ccff00] font-bold" : "text-[#D1D5DB]"
          }
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={
            pathname === "/my-plan"
              ? "text-[#ccff00] font-bold" // 🆕 ADDED
              : "text-[#D1D5DB]"
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-[#0C0D10] p-5">
      <div className="navbar  shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex gap-2">
            <Image src={Logo} alt="Logo Image" width={25} height={25}></Image>
            <Link href="/" className="btn btn-ghost text-2xl">
              FITLOG
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex gap-5">
          <Link href="/my-plan" className="text-[#9CA3AF] btn">
            Plan{" "}
            <span className="border p-1 px-2.5 border-[#2D313B] rounded-full ml-1 text-[#000000] bg-[#C2F800]">
              {planItems.length}
            </span>
          </Link>
          <Link href="/my-plan" className="text-[#9CA3AF] btn">
            Saved{" "}
            <span className="border p-1 px-2.5 border-[#2D313B] rounded-full ml-1 text-[#D1D5DB]">
              {savedItems.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
