"use client";
import Image from "next/image";
import {
  UsersIcon,
  PencilIcon,
  BellAlertIcon,
  ArchiveBoxIcon,
  MapPinIcon,
  CogIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import { Button, Input } from "rizzui";

const Editprofile = () => {
  return (
    <div className="h-[100vh]">
      {/* User Profile */}
      <div className="flex  items-center gap-4">
        <div className="relative">
          <Image
            src="/assets/avatar/memoji.png"
            alt="profile"
            width={150}
            height={150}
            className="opacity-30 "
          />
          <CameraIcon className=" absolute w-6 z-2 bottom-14 left-14"/>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <div className="font-rufina font-bold text-black text-[28px]">
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
        <div className="flex w-[30%] ml-auto gap-4">
          <Button
            variant="solid"
            rounded="pill"
            className="text-black hover:text-white border-2 border-muted w-full py-4 "
          >
            Save changes
          </Button>

          <Button
            variant="solid"
            rounded="pill"
            className="text-black hover:text-white border-2 border-muted w-full py-4 px-6"
          >
            Discard changes
          </Button>
        </div>
      </div>

      {/* Buttons section */}
      <div className="flex space-x-8  mt-4">
        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 border-muted gap-2 py-4 px-6"
        >
          <UsersIcon width={20} />
          <span className="">My Profile</span>
        </Button>
        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 border-muted gap-2 py-4 px-6"
        >
          <PencilIcon width={20} />
          <span className="">Edit profile</span>
        </Button>
        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 border-muted gap-2 py-4 px-6"
        >
          <BellAlertIcon width={20} />
          <span className="">Notification</span>
        </Button>

        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 border-muted gap-2 py-4 px-6"
        >
          <ArchiveBoxIcon width={20} />
          <span className="">My orders</span>
        </Button>

        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 border-muted gap-2 py-4 px-6"
        >
          <MapPinIcon width={20} />
          <span className="">Addresses</span>
        </Button>

        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 border-muted gap-2 py-4 px-6"
        >
          <CogIcon width={20} />
          <span className="">Settings</span>
        </Button>
      </div>
      <div className="border-t-2 text-muted mt-4"></div>

      {/* Input sections */}

      <div className="flex">
        <div className="w-[50%] mt-6 space-y-4 ">
          <Input
            label="User name"
            placeholder="Enter your name"
            rounded="pill"
          />
          <Input
            label="Phone number"
            placeholder="Enter your phone number"
            rounded="pill"
            className=""
          />
          <div className="">
            <label htmlFor="gender" className="font-medium text-sm ">
              Gender
            </label>
            <div className="flex gap-4 mt-2">
              <Button
                variant="solid"
                rounded="pill"
                className="text-black hover:text-white border-2 border-muted w-full py-4"
              >
                Male
              </Button>
              <Button
                variant="solid"
                rounded="pill"
                className="text-black hover:text-white border-2 border-muted w-full py-4"
              >
                Female
              </Button>
            </div>
          </div>
        </div>

        <div className="w-[50%] mt-6 space-y-4 ml-12">
          <Input label="Email" placeholder="Enter your Email" rounded="pill" />
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
  );
};

export default Editprofile;
