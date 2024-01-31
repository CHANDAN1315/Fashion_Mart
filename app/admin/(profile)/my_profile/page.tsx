"use client";
import Image from "next/image";
import {
  UsersIcon,
  PencilIcon,
  BellAlertIcon,
  ArchiveBoxIcon,
  MapPinIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { Button, Input } from "rizzui";
import {
  ArrowRightStartOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import Buttongroup from "@/components/Buttongroup";
const MyProfile = () => {
  return (
    <div className="h-full md:h-[100vh]">
      {/* User Profile */}
      <div className="md:flex  gap-4 py-2 px-4">
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
      <Buttongroup/>

      {/* Input sections */}

      <div className="flex-col-1 mb-6 md:mb-0 mx-4 md:flex z-1">
        <div className="w-full md:w-[50%] mt-6 space-y-4 ">
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
                className="text-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black border-2  border-muted dark:border-[#333333] w-full py-4"
              >
                Male
              </Button>
              <Button
                variant="solid"
                rounded="pill"
                className="text-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black border-2  border-muted dark:border-[#333333] w-full py-4"
              >
                Female
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Button
                variant="solid"
                rounded="pill"
                className=" text-red-default border-2 border-muted dark:border-[#333333] py-4 w-full md:w-[40%] hover:bg-white"
              >
                <span>Log out account</span>
                <ArrowRightStartOnRectangleIcon
                  strokeWidth="2"
                  className="h-4 w-4 ml-2"
                />
              </Button>
              <Button
                variant="solid"
                rounded="pill"
                className="text-red-default border-2 border-muted dark:border-[#333333] py-4 w-full md:w-[40%] hover:bg-white"
              >
                <span>Delete account</span>
                <TrashIcon strokeWidth="2" className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] mt-6 space-y-4 md:ml-12 ">
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
