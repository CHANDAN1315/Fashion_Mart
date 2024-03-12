"use client";

import Buttongroup from "@/components/Buttongroup";

import Image from "next/image";
import { myorderData } from "@/data/myorderData";
import { MapPinIcon, XMarkIcon } from "@heroicons/react/24/outline";

const MyOrder = () => {
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

      <div className="m-4 h-[55vh] md:h-[70vh] lg:h-[80vh]   overflow-y-scroll no-scrollbar">
        {myorderData &&
          myorderData.map((item) => (
            <div
              className="overflow-scroll no-scrollbar "
              key={item.id}
            >
              <div className="flex flex-col justify-center items-center sm:flex-row my-4 ">
                <Image
                  src={item.product_img}
                  alt="img"
                  width={100}
                  height={100}


                />
                <div className="ml-4 flex flex-col max-sm:items-center">
                  <div className="font-medium font-poppins text-nowrap">
                    {item.name}
                  </div>
                  <div className="text-sm text-foreground  text-nowrap font-medium">
                    {item.website}
                  </div>
                  <div className="flex text-sm text-foreground space-x-4">
                    <div className="text-nowrap">Size: {item.size}</div>
                    <div className="text-nowrap">Color: {item.color}</div>
                    <div className="text-nowrap">Quantity: {item.quantity}</div>
                  </div>
                  <div className="text-foreground text-nowrap">
                    Order ID:{" "}
                    <span className="font-medium text-nowrap">
                      {item.order_id}
                    </span>
                  </div>
                </div>

                <div className="ml-auto flex flex-row w-full sm:w-auto items-center justify-center space-x-12 sm:flex-col max-sm:mt-4">
                  <div className="font-semibold sm:ml-10 sm:mb-10 text-nowrap">
                    ${item.price}
                  </div>
                  <div className="flex space-x-6 ">
                    <button className="p-2 bg-muted rounded-full">
                      <MapPinIcon width={25} height={25} />
                    </button>
                    <button className="p-2 bg-red-100 rounded-full">
                      <XMarkIcon
                        width={25}
                        height={25}
                        className="text-red-500"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className=" border-t-2 border-muted mt-4 text-nowrap"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyOrder;
