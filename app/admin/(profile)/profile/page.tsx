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
const Profile = () => {
  return (
    <div className="h-[100vh]">
      {/* User Profile */}
      <div className="flex  gap-4">
        <Image
          src="/assets/avatar/memoji.png"
          alt="profile"
          width={150}
          height={150}
        />
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
      </div>

      {/* Buttons section */}
      <div className="flex space-x-8  mt-4">
        <div className="flex gap-2 hover:bg-black hover:text-white rounded-full py-2 px-4 border-2 border-muted cursor-pointer">
          <UsersIcon width={20} />
          <span className="text-foreground hover:bg-black hover:text-white">
            My Profile
          </span>
        </div>
        <div className="flex gap-2 hover:bg-black hover:text-white rounded-full py-2 px-4 border-2 border-muted cursor-pointer">
          <PencilIcon width={20} />
          <span className="text-foreground hover:bg-black hover:text-white">
            Edit profile
          </span>
        </div>
        <div className="flex gap-2 hover:bg-black hover:text-white rounded-full py-2 px-4 border-2 border-muted cursor-pointer">
          <BellAlertIcon width={20} />
          <span className="text-foreground hover:bg-black hover:text-white">
            Notification
          </span>
        </div>
        <div className="flex gap-2 hover:bg-black hover:text-white rounded-full py-2 px-4 border-2 border-muted cursor-pointer">
          <ArchiveBoxIcon width={20} />
          <span className="text-foreground hover:bg-black hover:text-white">
            My orders
          </span>
        </div>
        <div className="flex gap-2 hover:bg-black hover:text-white rounded-full py-2 px-4 border-2 border-muted cursor-pointer">
          <MapPinIcon width={20} />
          <span className="text-foreground hover:bg-black hover:text-white">
            Addresses
          </span>
        </div>
        <div className="flex gap-2 hover:bg-black hover:text-white rounded-full py-2 px-4 border-2 border-muted cursor-pointer">
          <CogIcon width={20} />
          <span className="text-foreground hover:bg-black hover:text-white">
            Settings
          </span>
        </div>
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
            <div className="flex gap-4 mt-4">
              <Button
                variant="solid"
                rounded="pill"
                className="text-red-default border-2 border-muted py-4 w-[40%] hover:bg-white"
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
                className="text-red-default border-2 border-muted py-4 w-[40%] hover:bg-white"
              >
                <span>Delete account</span>
                <TrashIcon strokeWidth="2" className="h-4 w-4 ml-2" />
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

export default Profile;
