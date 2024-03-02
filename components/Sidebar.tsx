"use client";
import { sidebarData } from "@/data/sidebarData";
import {
  HomeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [dropDown, setDropdown] = useState<Number>(0);


  const toggleDropdown = (id: Number) => {
    if (dropDown === id) return setDropdown(0);
    setDropdown(id);
  };

  return (
    <div className="h-[100vh] ">
      <div className="flex space-x-2 items-center py-2 pl-3 ">
        <HomeIcon width={24} height={24} />
        <span className="text-black font-roboto dark:text-white">
          Dashboard
        </span>
      </div>
      <div className="">
        {sidebarData.map((item) => (
          <div key={item.id}>
            <div
              className="flex justify-between bg-white text-black py-2 my-2 "
              style={{
                backgroundColor: dropDown !== item.id ? "white" : "black",
                color: dropDown !== item.id ? "black" : "white",
              }}
            >
              <div className="flex space-x-2 ">
                {dropDown === item.id && <div className="border-l-4 pl-3"></div>}
                <item.icon width={24} height={24} className="ml-3"/>
                <span>{item.title}</span>
              </div>
              <div className="cursor-pointer">
                {dropDown !== item.id ? (
                  <ChevronDownIcon
                    onClick={() => toggleDropdown(item.id)}
                    width={24}
                    height={24}
                  />
                ) : (
                  <ChevronUpIcon
                    onClick={() => toggleDropdown(item.id)}
                    width={24}
                    height={24}
                  />
                )}
              </div>
            </div>
            {item.links.map((link) => (
              <div key={link.text}>
                {dropDown === item.id ? (
                  <div className="flex items-center space-x-2 ml-8 mt-1 text-foreground hover:cursor-pointer hover:text-black dark:hover:text-white hover:font-medium">
                    <div className="w-1 h-1 bg-foreground rounded-full mx-2 my-3  "></div>
                    <Link href={link.url}>{link.text}</Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
