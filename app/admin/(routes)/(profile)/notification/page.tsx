"use client";

import Image from "next/image";
import { notification } from "@/data/notification";
import {
  EllipsisVerticalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Buttongroup from "@/components/Buttongroup";
import { useEffect, useRef, useState } from "react";
import ThreeDotCard from "@/components/ThreeDotCard";

const Notification = () => {
  const [clicked, setClicked] = useState<Number>(0);

  const domNode = useRef(null);

  useEffect(() => {
    let handler = (event: any) => { 
      if (!domNode.current?.contains(event.target)) {
        setClicked(0);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <div className="h-full md:h-[100vh] w-full md:w-[70vw] lg:w-[78vw] overflow-y-scroll no-scrollbar scroll">
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
                    <div className="font-medium text-sm sm:text-base">{item.title}</div>
                    <div className="text-xs sm:text-sm text-foreground font-poppins">
                      {item.discription}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3 ">
                  <div className="font-medium text-xs md:text-sm text-nowrap">{item.duration}</div>

                  <div className="relative mt-2" ref={domNode}>
                    <button
                      className="bg-gray-100 rounded-full m-auto p-2 cursor-pointer hover:bg-muted"
                      onClick={() => clicked === item.id ? setClicked(0) : setClicked(item.id)}
                    >
                      
                      {clicked !== item.id ? (
                        <EllipsisVerticalIcon width={0} height={0} className="w-4 h-4 sm:w-6 sm:h-6" />
                      ) : (
                        <XMarkIcon width={0} height={0} className="w-4 h-4 md:w-6 md:h-6"/>
                      )}

                      {
                        clicked === item.id ? (<ThreeDotCard/>) : (<></>)
                      }
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-muted mt-4"></div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Notification;
