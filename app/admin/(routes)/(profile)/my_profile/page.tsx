"use client";
import Image from "next/image";

import { Button, Input } from "rizzui";
import {
  ArrowRightStartOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import Buttongroup from "@/components/Buttongroup";
const MyProfile = () => {
  return (
    
    <div className="h-full md:h-[100vh] w-full md:w-[70vw] lg:w-[75vw] overflow-y-scroll no-scrollbar ">
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
      {/* Input sections */}

      <div className="flex-col-1 mb-6 lg:mb-0 mx-4 lg:flex">
        <div className="w-full xl:w-[50%] mt-6 space-y-4 ">
          <Input
            label="User name"
            placeholder="Enter your name"
            rounded="pill"
            inputClassName="dark:border-[#333333]"
          />
          <Input
            label="Phone number"
            placeholder="Enter your phone number"
            rounded="pill"
            inputClassName="dark:border-[#333333]"
          />
          <div className="">
            <label htmlFor="gender" className="font-medium text-sm ">
              Gender
            </label>
            <div className="flex gap-4 mt-2">
              <Button
                variant="solid"
                rounded="pill"
                className="w-full py-4 text-xs md:text-sm  text-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black border-2  border-muted dark:border-[#333333] "
              >
                Male
              </Button>
              <Button
                variant="solid"
                rounded="pill"
                className="w-full py-4 text-xs md:text-sm  text-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black border-2  border-muted dark:border-[#333333]"
              >
                Female
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Button
                variant="solid"
                rounded="pill"
                className=" text-red-default border-2 text-[10px] xs:text-xs md:text-sm  border-muted dark:border-[#333333] py-4 w-full md:w-[40%] hover:bg-white"
              >
                <span>Log out account</span>
                <ArrowRightStartOnRectangleIcon
                  strokeWidth="2"
                  className="h-4 w-4 ml-2 "
                />
              </Button>
              <Button
                variant="solid"
                rounded="pill"
                className="text-red-default border-2 text-[10px] xs:text-xs md:text-sm  border-muted dark:border-[#333333] py-4 w-full md:w-[40%] hover:bg-white"
              >
                <span>Delete account</span>
                <TrashIcon strokeWidth="2" className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[50%] mt-6 space-y-4 lg:ml-12 ">
          <Input
            label="Email"
            placeholder="Enter your Email"
            rounded="pill"
            inputClassName="dark:border-[#333333]"
          />
          <Input
            label="Location"
            placeholder="Enter your phone Location"
            rounded="pill"
            inputClassName="dark:border-[#333333]"
          />
          <div className="">
            <label htmlFor="date of birth" className="text-sm font-medium">
              DOB/Date of birth
            </label>
            <div className="flex gap-4 mt-2">
              <Input
                placeholder="day"
                rounded="pill"
                inputClassName="dark:border-[#333333]"
              />
              <Input
                placeholder="month"
                rounded="pill"
                inputClassName="dark:border-[#333333]"
              />
              <Input
                placeholder="year"
                rounded="pill"
                inputClassName="dark:border-[#333333]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
