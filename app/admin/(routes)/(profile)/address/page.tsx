"use client";

import Buttongroup from "@/components/Buttongroup";

import Image from "next/image";
import { addressData } from "@/data/address";
import { Checkbox } from "rizzui";
import { useState } from "react";

const Address = () => {
  const [checked, setChecked] = useState<number>(0);

  
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
            <div
              className="flex justify-between items-start border-2 border-muted p-4 my-4  rounded-lg "
              key={item.id}
              onClick={() => {
                if (checked === item.id) return setChecked(0);
                setChecked(item.id);
              }}
            >
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <item.icon width={25} height={25} />
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="text-foreground text-sm ">{item.address}</div>
                <div className="text-black text-sm font-medium">
                  Phone no: <span className="font-normal">{item.phone}</span>
                </div>
              </div>
              <Checkbox
                className="accent-black"
                // onClick={() => {
                //   if (checked !== item.id)  setChecked(0);
                //   setChecked(item.id);
                // }}
                checked={item.id === checked}
                rounded="full"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Address;
