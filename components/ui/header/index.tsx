"use client";
import { navItems } from "@/core/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  return (
    <div className="w-full h-20 bg-indigo-400 flex items-center justify-between px-10">
      <p className="text-2xl font-bold text-white">@Tanstack / react-query</p>
      <div className="w-100 h-full flex items-center justify-center">
        {navItems.map((item) => {
          const activePath = pathName === item.path;
          return (
            <Link
              href={item.path}
              key={item.id}
              className={`${activePath ? "text-indigo-800 font-bold" : "text-white"} w-fit h-fit p-2`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;