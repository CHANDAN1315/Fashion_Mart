"use client";

import {
  ArchiveBoxIcon,
  BellAlertIcon,
  CameraIcon,
  CogIcon,
  MapPinIcon,
  PencilIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Button } from "rizzui";
import { notification } from "@/data/notification";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Notification = () => {
  return (
    <div className="h-[100vh] ">
      {/* User Profile */}
      <div className="flex gap-4 py-2 px-4">
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
      <div className="flex space-x-8  mt-4 px-4">
        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
        >
          <UsersIcon width={20} />
          <span className="">My Profile</span>
        </Button>
        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
        >
          <PencilIcon width={20} />
          <span className="">Edit profile</span>
        </Button>
        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
        >
          <BellAlertIcon width={20} />
          <span className="">Notification</span>
        </Button>

        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
        >
          <ArchiveBoxIcon width={20} />
          <span className="">My orders</span>
        </Button>

        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
        >
          <MapPinIcon width={20} />
          <span className="">Addresses</span>
        </Button>

        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
        >
          <CogIcon width={20} />
          <span className="">Settings</span>
        </Button>
      </div>
      <div className="border-t-2 border-muted dark:border-[#333333] mt-4"></div>

      <div className="m-4">
        {notification &&
          notification.map((item) => (
            <>
              <div className="flex justify-between items-center my-6" key={item.id}>
                <div className="flex space-x-3">
                  <div className="bg-muted rounded-full">
                    <Image
                      src={item.img}
                      alt="profile"
                      width={40}
                      height={40}
                      className="p-2"
                    />
                  </div>
                  <div className="">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-foreground font-poppins">
                      {item.discription}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center space-x-3">
                  <div className="font-medium text-sm">{item.duration}</div>
                  <div className="bg-muted rounded-full">
                    <EllipsisVerticalIcon
                      className="p-2"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-muted  mt-4"></div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Notification;
