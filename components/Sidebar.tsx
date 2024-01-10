"use client";
import Image from "next/image";
import { sidebarData } from "@/data/sidebarData";
const Sidebar = () => {
  return (
    <div>
      <div className="flex space-x-4 items-center p-2    ">
        <Image
          src="/assets/icons/svg/black/ic_black_home.svg"
          alt="home"
          width={24}
          height={24}
        />
        <span className="text-black font-roboto">Dashboard</span>
      </div>
      <div className="">
        {sidebarData.map((item) => (
          <div key={item.title}>
            <div className="flex justify-between bg-black text-white py-2 px-3 my-2 ">
              <div className="flex space-x-2">
                <Image
                  src={item.icon}
                  alt="item_icon"
                  width={24}
                  height={24}
                />
                <span>{item.title}</span>
              </div>
              <Image
                src={item.dropDown}
                alt="dropdown_icon"
                width={24}
                height={24}
              />
            </div>
            {item.links.map((link) => (
              <div key={link} className="flex items-center space-x-2 ml-8 mt-1 text-foreground hover:cursor-pointer hover:text-black hover:font-medium">
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
