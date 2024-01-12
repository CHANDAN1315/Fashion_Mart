"use client";

import { useState, useMemo } from "react";
import { Checkbox, Avatar, Text, Dropdown, Button, Input } from "rizzui";
import Table from "@/components/Table";
import HeaderCell from "@/components/TableHeader";
import { categories } from "@/data/categories";
import {
  MagnifyingGlassIcon,
  ArrowUpTrayIcon,
  FunnelIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import PaginationComponent from "@/components/PaginationComponent";
import DropdownComponent from "@/components/DropdownComponent";

const Categories = () => {
  const [order, setOrder] = useState<string>("desc");
  const [column, setColumn] = useState<string>("");
  const [data, setData] = useState<typeof categories>(categories);

  const dataLength = 50;
  const currentPage = 1;
  const optionData = [1, 2, 3, 4, 5];

  function getStatusBadge(status: string) {
    switch (status.toLowerCase()) {
      case "published":
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
      case "draft":
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
          <Checkbox variant="flat" />
        </div>
      ),
    },

    {
      title: <HeaderCell title="Images" />,
      dataIndex: "image",
      key: "image",
      width: 250,
      render: (image: string) => (
        <div className="flex items-center">
          <Avatar src={image} name={`image`} rounded="md" />
        </div>
      ),
    },
    {
      title: <HeaderCell title="Category" />,
      dataIndex: "category_title",
      key: "category_title",
      width: 250,
      render: (category_title: string) => <div className="text-foreground font-medium">{category_title}</div>,
    },
    {
      title: <HeaderCell title="Slug" />,
      dataIndex: "slug",
      key: "slug",
      width: 250,
      render: (slug: string) => <div className="text-foreground">{slug}</div>,
    },
    {
      title: <HeaderCell title="Products" />,
      dataIndex: "products",
      key: "products",
      width: 250,
      render: (products: number) => <div className="text-foreground pl-6">{products}</div>,
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
        <div className=" flex justify-center items-center w-10 h-10 bg-gray-200 rounded-full">
          <Image
            src="/assets/icons/svg/black/ic_black_3_dots.svg"
            alt="three_dots"
            height={25}
            width={25}
          />
        </div>
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
      <div className="text-black font-rufina font-bold text-[24px]">
        Categories
      </div>
      <div className="flex items-center space-x-2 text-foreground">
        <div>E-commerce</div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div>Categories</div>
      </div>
      <div className="flex justify-between mt-2">
        <Input
          prefix={<MagnifyingGlassIcon className="w-4" />}
          placeholder="Search"
          rounded="pill"
        />

        {/* Buttons section */}

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
            className="bg-black text-white hover:bg-white hover:text-black space-x-2 hover:border-muted"
          >
            <PlusIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Add Category</span>
          </Button>
        </div>
      </div>

      {/* Table section */}

      <Table data={data} columns={columns} className="text-sm  my-4 " />

      {/* Pagination */}

      <div className="flex justify-between items-center">
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

export default Categories;
