"use client";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "rizzui";
import Buttongroup from "@/components/Buttongroup";

const Editprofile = () => {
  return (
    <>
      <div className="h-full md:h-[100vh] w-full md:w-[70vw] lg:w-[75vw] overflow-y-scroll no-scrollbar scroll">
        {/* User Profile */}
        <div className="md:flex items-center justify-center gap-4 py-2 px-4">
          <div className="relative">
            <Image
              src="/assets/avatar/memoji.png"
              alt="profile"
              width={150}
              height={150}
              className="opacity-30 "
            />
            <CameraIcon className=" absolute w-6 z-2 bottom-14 left-14" />
          </div>

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
          <div className="flex md:flex-col lg:flex-row mt-4 md:my-0 ml-auto gap-4">
            <Button
              variant="solid"
              rounded="pill"
              className="gap-2 py-4 w-36 text-xs sm:text-sm  px-6 text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] "
            >
              Save changes
            </Button>

            <Button
              variant="solid"
              rounded="pill"
              className="gap-2 py-4 px-6 w-40 text-xs sm:text-sm text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] "
            >
              Discard changes
            </Button>
          </div>
        </div>

        {/* Buttons section */}
        <Buttongroup />

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
                  className="w-full py-4 text-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black border-2  border-muted dark:border-[#333333] "
                >
                  Male
                </Button>
                <Button
                  variant="solid"
                  rounded="pill"
                  className="w-full py-4 text-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black border-2  border-muted dark:border-[#333333]"
                >
                  Female
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] mt-6 space-y-4 lg:ml-12 ">
            <Input
              label="Email"
              placeholder="Enter your Email"
              rounded="pill"
            />
            <Input
              label="Location"
              placeholder="Enter your phone Location"
              rounded="pill"
            />
            <div className="">
              <label htmlFor="date of birth" className="text-sm font-medium">
                DOB/Date of birth
              </label>
              <div className="flex gap-4 mt-2">
                <Input placeholder="day" rounded="pill" />
                <Input placeholder="month" rounded="pill" />
                <Input placeholder="year" rounded="pill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
