"use client";

import Buttongroup from "@/components/Buttongroup";

import Image from "next/image";
import {
  BellAlertIcon,
  ChevronRightIcon,
  LanguageIcon,
  LockClosedIcon,
  PencilIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Switch from "@/components/Switch";

const Settings = () => {

  
  const [enabled, setEnabled] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(false);

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
        <div className="font-rufina font-medium text-xl">
          Profile & Security
        </div>
        <div className="my-4">
          <div className="flex  justify-between items-center  hover:bg-muted  my-2 p-1 rounded-xl cursor-pointer">
            <div className="flex item-center space-x-2">
              <div className="bg-orange-400 text-white p-2 rounded-full ">
                <PencilIcon width={25} height={25} />
              </div>
              <span className="text-lg font-medium my-auto">Edit profile</span>
            </div>
            <ChevronRightIcon width={25} height={25} />
          </div>
          <div className="flex  justify-between items-center  hover:bg-muted  my-2 p-1 rounded-xl cursor-pointer">
            <div className="flex item-center space-x-2">
              <div className="bg-blue-500 text-white p-2 rounded-full ">
                <LockClosedIcon width={25} height={25} />
              </div>
              <span className="text-lg font-medium my-auto">
                Reset password
              </span>
            </div>
            <ChevronRightIcon width={25} height={25} />
          </div>
          <div className="flex  justify-between items-center  hover:bg-muted  my-2 p-1 rounded-xl cursor-pointer">
            <div className="flex item-center space-x-2">
              <div className="bg-black text-white p-2 rounded-full ">
                <LanguageIcon width={25} height={25} />
              </div>
              <span className="text-lg font-medium my-auto">Language</span>
            </div>
            <ChevronRightIcon width={25} height={25} />
          </div>
        </div>

        <div className="font-rufina font-medium text-xl">
          Notifications & Theming
        </div>
        <div className="my-4">
          <div className="flex  justify-between items-center  hover:bg-muted  my-2 p-1 rounded-xl cursor-pointer">
            <div className="flex item-center space-x-2">
              <div className="bg-green-400 text-white p-2 rounded-full ">
                <BellAlertIcon width={25} height={25} />
              </div>
              <span className="text-lg font-medium my-auto">Notifications</span>
            </div>
            <Switch
              checked={enabled}
              onChange={(e:any) => setEnabled(e.target.checked)}
            />
          </div>
          <div className="flex  justify-between items-center  hover:bg-muted  my-2 p-1 rounded-xl cursor-pointer">
            <div className="flex item-center space-x-2">
              <div className="bg-yellow-400 text-white p-2 rounded-full ">
                <SunIcon width={25} height={25} />
              </div>
              <span className="text-lg font-medium my-auto">Light theme</span>
            </div>
            <Switch
              checked={theme}
              onChange={(e: any) => setTheme(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
