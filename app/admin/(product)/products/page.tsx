"use client";

import Image from "next/image";
import { Button, Input } from "rizzui";
import {
  MagnifyingGlassIcon,
  ArrowUpTrayIcon,
  FunnelIcon,
  PlusIcon

} from "@heroicons/react/24/outline";

const page = () => {
  return (
    <>
      <div className="text-black font-rufina font-bold text-[24px]">
        Products
      </div>
      <div className="flex space-x-2 text-foreground">
        <span>E-commerce</span>
        <span className=" font-bold text-[20px]">.</span>
        <span>Products</span>
      </div>

      <div className="flex justify-between">
        <Input
          prefix={<MagnifyingGlassIcon className="w-4" />}
          placeholder="Search"
          rounded="pill"
        />

        <div className="flex space-x-4">
          <Button
            rounded="pill"
            className="bg-white text-black border-gray-200 hover:bg-black hover:text-white space-x-2"
          >
            <ArrowUpTrayIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Import</span>
          </Button>

          <Button
            rounded="pill"
            className="bg-white text-black border-gray-200 hover:bg-black hover:text-white space-x-2"
          >
            <FunnelIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Filter</span>
          </Button>

          <Button
            rounded="pill"
            color="primary"
            className="bg-black text-white hover:bg-white hover:text-black space-x-2"
          >
            <PlusIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Add Product</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
