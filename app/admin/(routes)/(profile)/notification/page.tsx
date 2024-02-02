"use client";

import Image from "next/image";
import { notification } from "@/data/notification";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Buttongroup from "@/components/Buttongroup";

const Notification = () => {
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

      <div className="m-4 h-[55vh] md:h-[70vh] lg:h-[80vh] overflow-y-scroll no-scrollbar">
        {notification &&
          notification.map((item) => (
            <>
              <div
                className="flex justify-between items-center my-6"
                key={item.id}
              >
                <div className="flex space-x-3">
                  <div className="flex items-center ">
                    <Image
                      src={item.img}
                      alt="profile"
                      width={40}
                      height={40}
                      className="p-2 hidden md:block bg-muted rounded-full"
                    />
                  </div>
                  <div className="">
                    <div className="font-medium text-base">{item.title}</div>
                    <div className="text-sm text-foreground font-poppins">
                      {item.discription}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3 ">
                  <div className="font-medium text-sm">{item.duration}</div>
                  <EllipsisVerticalIcon
                    className="p-1 sm:p-2 w-8 md:w-10 h-8 md:h-10 bg-muted rounded-full "
                    width={0}
                    height={0}
                  />
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
