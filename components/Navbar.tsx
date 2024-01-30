"use client";

import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { CogIcon, BellAlertIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <section className="w-[100wh] flex justify-between border-muted dark:border-[#333333] border-y-2 border-l-2 py-1">
      <div className="flex items-center space-x-1 ">
        <Image
          src="/assets/logo/Subtract.svg"
          alt="logo"
          width={24}
          height={24}
          className="m-4"
        />
        <div className="text-black dark:text-white text-lg font-medium">
          Fashion Mart
        </div>
      </div>

      <div className="flex space-x-4 mr-4">
        <div className=" flex items-center p-1" >
          <ThemeSwitcher />
        </div>
        <div className="flex items-center bg-muted dark:bg-[#333333] rounded-full m-2 px-2 ">
          <BellAlertIcon width={25} height={25}/>
        </div>
        <div className="flex items-center bg-muted dark:bg-[#333333] rounded-full m-2 px-2 ">
          <CogIcon width={25} height={25} />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/assets/avatar/user_1.png"
            alt="user_logo"
            width={40}
            height={0}
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
