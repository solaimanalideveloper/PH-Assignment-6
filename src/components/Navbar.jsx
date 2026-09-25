// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Logo from "../../public/assets/logo.png";

// const Navbar = () => {
//   const links = (
//     <>
//       <li>
//         <Link href="/" className="text-[#D1D5DB]">
//           Workouts
//         </Link>
//       </li>
//       <li>
//         <Link href="/my-plan" className="text-[#D1D5DB]">
//           My Plan
//         </Link>
//       </li>
//     </>
//   );

//   return (
//     <div className=" bg-[#0C0D10] p-5">
//       <div className="navbar  shadow-sm container mx-auto">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 aria-label="Menu"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex={-1}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               {links}
//             </ul>
//           </div>

//           <div className="flex gap-2">
//             <Image src={Logo} alt="Logo Image" width={25} height={25}></Image>
//             <Link href="/" className="btn btn-ghost text-2xl">
//               FITLOG
//             </Link>
//           </div>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>
//         <div className="navbar-end flex gap-5">
//           <Link href="/my-plan" className="text-[#9CA3AF] btn">
//             Plan{" "}
//             <span className="border p-1 px-2.5 border-[#2D313B] rounded-full ml-1 text-[#000000] bg-[#C2F800]">
//               0
//             </span>
//           </Link>
//           <Link href="/my-plan" className="text-[#9CA3AF] btn">
//             Saved{" "}
//             <span className="border p-1 px-2.5 border-[#2D313B] rounded-full ml-1 text-[#D1D5DB]">
//               0
//             </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx

"use client";
// 🆕 ADDED: usePathname লাগবে active link highlight করতে, এইজন্য এই কম্পোনেন্টকে
// client component বানাতে হলো (তাই উপরে "use client" যোগ করলাম, আগে ছিল না)
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 🆕 ADDED
import { usePlan } from "@/context/PlanContext"; // 🆕 ADDED — badge count এর জন্য Context লাগবে
import Logo from "../../public/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname(); // 🆕 ADDED — এই মুহূর্তে কোন route এ আছি সেইটা জানতে
  const { planItems, savedItems } = usePlan(); // 🆕 ADDED — হার্ডকোডেড 0 এর বদলে real data

  // 🔄 CHANGED: links ভ্যারিয়েবলের ভিতরে className এখন dynamic —
  // pathname এর সাথে মিললে highlight color, না মিললে normal color।
  // মোবাইল dropdown আর ডেস্কটপ menu — দুই জায়গাতেই এই একই `links` ভ্যারিয়েবল ইউজ হচ্ছে,
  // তাই একবার বদলালে দুই জায়গাতেই কাজ করবে।
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-[#ccff00] font-bold" // 🆕 ADDED — active অবস্থায় accent color
              : "text-[#D1D5DB]" // অপরিবর্তিত — আগের মতোই default color
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
        {/* নিচের পুরো navbar-start ব্লক — mobile dropdown + logo — অপরিবর্তিত, আপনার আগের কোডই */}
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

        {/* এইটাও অপরিবর্তিত — শুধু ভিতরের `links` ভ্যারিয়েবল এখন dynamic className বহন করছে */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* 🔄 CHANGED: এই পুরো ব্লকে হার্ডকোডেড "0" সরিয়ে planItems.length / savedItems.length বসালাম */}
        <div className="navbar-end flex gap-5">
          <Link href="/my-plan" className="text-[#9CA3AF] btn">
            Plan{" "}
            <span className="border p-1 px-2.5 border-[#2D313B] rounded-full ml-1 text-[#000000] bg-[#C2F800]">
              {planItems.length} {/* 🔄 CHANGED — আগে ছিল হার্ডকোডেড 0 */}
            </span>
          </Link>
          <Link href="/my-plan" className="text-[#9CA3AF] btn">
            Saved{" "}
            <span className="border p-1 px-2.5 border-[#2D313B] rounded-full ml-1 text-[#D1D5DB]">
              {savedItems.length} {/* 🔄 CHANGED — আগে ছিল হার্ডকোডেড 0 */}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
