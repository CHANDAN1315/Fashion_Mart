"use client";

import { useState, useMemo } from "react";
import {
  Checkbox,
  Avatar,
  Text,
  Dropdown,
  Button,
  Input,
  ActionIcon,
} from "rizzui";
import Table from "@/components/Table";
import HeaderCell from "@/components/TableHeader";
import brands from "@/data/brands";
import {
  MagnifyingGlassIcon,
  ArrowUpTrayIcon,
  FunnelIcon,
  PlusIcon,
  EllipsisVerticalIcon,
  TrashIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import PaginationComponent from "@/components/PaginationComponent";
import DropdownComponent from "@/components/DropdownComponent";

const Brands = () => {
  const [order, setOrder] = useState<string>("desc");
  const [column, setColumn] = useState<string>("");
  const [data, setData] = useState<typeof brands>(brands);

  const dataLength = 50;
  const currentPage = 1;
  const optionData = [1, 2, 3, 4, 5];

  function getStatusBadge(status: string) {
    switch (status.toLowerCase()) {
      case "completed":
        return (
          <div className="flex items-center text-green-default gap-1 font-medium">
            <div className="w-1 h-1 bg-green-default rounded-full"></div>
            {status}
          </div>
        );
      case "pending":
        return (
          <div className="flex items-center text-orange-default gap-1 font-medium">
            <div className="w-1 h-1 bg-orange-default rounded-full"></div>
            {status}
          </div>
        );
      case "refunded":
        return (
          <div className="flex items-center text-red-default gap-1 font-medium">
            <div className="w-1 h-1 bg-red-default rounded-full"></div>
            {status}
          </div>
        );
      default:
        return null;
    }
  }

  const getColumns = (order: string, column: string) => [
    {
      title: <></>,
      dataIndex: "checked",
      key: "checked",
      width: 50,
      render: () => (
        <div className="inline-flex cursor-pointer">
          <Checkbox variant="flat" className="accent-black dark:accent-white" />
        </div>
      ),
    },

    {
      title: <HeaderCell title="Brand" />,
      dataIndex: "brand_image",
      key: "brand_image",
      width: 250,
      render: (brand_image: string) => (
        <div className="flex items-center">
          <Avatar
            src={brand_image}
            name={`brand_image`}
            rounded="md"
            color="primary"
            className="bg-gray-100"
          />
        </div>
      ),
    },
    {
      title: <HeaderCell title="Brand name" />,
      dataIndex: "brand_name",
      key: "brand_name",
      width: 250,
      render: (brand_name: string) => (
        <div className="text-foreground font-medium">{brand_name}</div>
      ),
    },

    {
      title: <HeaderCell title="Products" />,
      dataIndex: "products",
      key: "products",
      width: 250,
      render: (products: number) => (
        <div className="text-foreground pl-6">{products}</div>
      ),
    },

    {
      title: <HeaderCell title="Status" />,
      dataIndex: "status",
      key: "status",
      width: 250,
      render: (status: string) => getStatusBadge(status),
    },
    {
      title: <HeaderCell title="Actions" />,
      render: () => (
        <Dropdown placement="bottom-end">
          <Dropdown.Trigger>
            <button className=" flex justify-center items-center w-10 h-10 bg-gray-100 hover:bg-muted dark:bg-[#333333] rounded-full">
              <EllipsisVerticalIcon width={25} height={25} />
            </button>
          </Dropdown.Trigger>
          <Dropdown.Menu className="mr-12 ">
            <div className="flex justify-center items-center">
              <TrashIcon width={25} height={25} />
              <Dropdown.Item>Delete Notification</Dropdown.Item>
            </div>
            <div className="border-t-2 border-muted my-2"></div>
            <div className="flex justify-center items-center">
              <BookmarkIcon width={25} height={25} />
              <Dropdown.Item>Bookmark</Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
  ];

  const columns: any = useMemo(
    () => getColumns(order, column),
    [order, column]
  );

  return (
    <>
      {/* Heding section */}
      <div className=" text-black dark:text-white font-rufina font-bold text-[24px]">
        Brands
      </div>
      <div className="flex items-center space-x-2 text-foreground">
        <div>E-commerce</div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div>Brands</div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div>List</div>
      </div>
      <div className="flex flex-col md:flex md:flex-row justify-between mt-2 space-y-2">
        <Input
          prefix={<MagnifyingGlassIcon className="w-4" />}
          placeholder="Search"
          rounded="pill"
        />

        {/* Buttons section */}

        <div className="flex flex-col md:flex md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          <Button
            rounded="pill"
            className="bg-white text-black border-gray-200 hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-[#333333] dark:hover:bg-white dark:hover:text-black space-x-2"
          >
            <ArrowUpTrayIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Export</span>
          </Button>

          <Button
            rounded="pill"
            className="bg-white text-black border-gray-200 hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-[#333333] dark:hover:bg-white dark:hover:text-black space-x-2"
          >
            <FunnelIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Filter</span>
          </Button>

          <Button
            rounded="pill"
            color="primary"
            className="bg-black text-white hover:bg-white hover:text-black space-x-2 hover:border-muted dark:bg-white dark:text-black dark:border-[#333333] dark:hover:bg-black dark:hover:text-white"
          >
            <PlusIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Create new orders</span>
          </Button>
        </div>
      </div>

      {/* Table section */}

      <Table data={data} columns={columns} className="text-sm  my-4 " />

      {/* Pagination */}

      <div className="flex flex-col-reverse md:flex md:flex-row justify-between items-center">
        <div className="flex items-center font-roboto text-foreground space-x-2">
          <div className="">{"Rows Per Page"}</div>
          <DropdownComponent title={"5"} optionData={optionData} />
        </div>
        <PaginationComponent
          dataLength={dataLength}
          defaultCurrent={currentPage}
        />
      </div>
    </>
  );
};

export default Brands;
