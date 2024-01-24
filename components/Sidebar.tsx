"use client";
import Image from "next/image";
import { sidebarData } from "@/data/sidebarData";
import { HomeIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex space-x-4 items-center p-2    ">
        <HomeIcon width={24} height={24}/>
        <span className="text-black font-roboto dark:text-white">
          Dashboard
        </span>
      </div>
      <div className="">
        {sidebarData.map((item) => (
          <div key={item.title}>
            <div className="flex justify-between bg-black text-white dark:bg-white dark:text-black py-2 px-3 my-2 ">
              <div className="flex space-x-2">
                <item.icon width={24} height={24}/>
                <span>{item.title}</span>
              </div>
              <item.dropDown width={24} height={24}/>
            </div>
            {item.links.map((link) => (
              <div
                key={link}
                className="flex items-center space-x-2 ml-8 mt-1 text-foreground hover:cursor-pointer hover:text-black dark:hover:text-white hover:font-medium"
              >
                <div className="w-1 h-1 bg-foreground rounded-full mx-2 my-3  "></div>
                <div>{link}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
