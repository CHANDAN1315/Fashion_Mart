"use client";

import Buttongroup from "@/components/Buttongroup";

import Image from "next/image";
import {  } from "@heroicons/react/24/outline";
import { addressData } from "@/data/address";

const Settings = () => {
  return (
    <div className="h-full md:h-[100vh] w-full md:w-[70vw] lg:w-[75vw] overflow-y-scroll no-scrollbar scroll">
      {/* User Profile */}
      <div className="md:flex items-center  gap-4 py-2 px-4">
        <Image
          src="/assets/avatar/memoji.png"
          alt="profile"
          width={150}
          height={150}
        />
        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <div className="font-rufina font-bold text-black dark:text-white text-[28px]">
              Steven Rogers
            </div>
            <Image
              src="/assets/icons/svg/general/greentick.svg"
              alt="greentick"
              width={24}
              height={24}
            />
          </div>
          <div className="text-foreground">nevaeh.simmons@example.com</div>
          <div className="text-foreground">(316) 555-0116</div>
        </div>
      </div>
      {/* Buttons section */}
      <Buttongroup />
      <div className="border-t-2 border-muted dark:border-[#333333] mt-4"></div>

      <div className="m-4 h-[55vh] md:h-[70vh] lg:h-[80vh] overflow-y-scroll no-scrollbar">
        {addressData &&
          addressData.map((item) => (
            <></>
          ))}
      </div>
    </div>
  );
};

export default Settings;