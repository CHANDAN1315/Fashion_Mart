"use client";

import { useState, useMemo } from "react";
import { Checkbox, Avatar, Text, Dropdown, Button, Input } from "rizzui";
import Table from "@/components/Table";
import HeaderCell from "@/components/TableHeader";
import { customers } from "@/data/customers";

import {
  MagnifyingGlassIcon,
  ArrowUpTrayIcon,
  FunnelIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import PaginationComponent from "@/components/PaginationComponent";
import DropdownComponent from "@/components/DropdownComponent";

const Customers = () => {
  const [order, setOrder] = useState<string>("desc");
  const [column, setColumn] = useState<string>("");
  const [data, setData] = useState<typeof customers>(customers);

  const dataLength = 50;
  const currentPage = 1;
  const optionData = [1, 2, 3, 4, 5];

  function getStatusBadge(status: string) {
    switch (status.toLowerCase()) {
      case "active":
        return (
          <div className="flex items-center text-green-default gap-1 font-medium">
            <div className="w-1 h-1 bg-green-default rounded-full"></div>
            {status}
          </div>
        );
      case "new":
        return (
          <div className="flex items-center text-orange-default gap-1 font-medium">
            <div className="w-1 h-1 bg-orange-default rounded-full"></div>
            {status}
          </div>
        );
      case "inactive":
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
          <Checkbox variant="flat" className="accent-black" />
        </div>
      ),
    },

    {
      title: <HeaderCell title="Customers" />,
      dataIndex: "customer",
      key: "customer",
      width: 300,
      render: (customer: any) => (
        <div className="flex items-center">
          <Avatar src={customer.image} name={`image`} rounded="md" />
          <div className="ml-3 rtl:ml-0 rtl:mr-3">
            <Text className="mb-0.5 !text-sm font-roboto font-bold">
              {customer.name}
            </Text>
            <Text as="p" className="text-xs text-foreground">
              {customer.email}
            </Text>
          </div>
        </div>
      ),
    },

    {
      title: <HeaderCell title="Items Purchased" />,
      dataIndex: "items_purchase",
      key: "items_purchase",
      width: 250,
      render: (items_purchase: number) => <div className="text-foreground pl-12">{items_purchase}</div>,
    },

    {
      title: <HeaderCell title="Total Spent" />,
      dataIndex: "total_spent",
      key: "total_spent",
      width: 250,
      render: (total_spent: number) => <div className="text-foreground pl-4">{total_spent}</div>,
    },
    {
      title: <HeaderCell title="status" />,
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
        Customers
      </div>
      <div className="flex items-center space-x-2 text-foreground">
        <div>Customer</div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div>Customers</div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div>List</div>
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
            <span>Export</span>
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
            <span>Add new customer</span>
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

export default Customers;
