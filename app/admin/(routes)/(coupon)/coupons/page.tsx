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
  Modal,
  Password,
  Radio,
} from "rizzui";
import Table from "@/components/Table";
import HeaderCell from "@/components/TableHeader";
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
import coupons from "@/data/coupons";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Categories = () => {
  const [order, setOrder] = useState<string>("desc");
  const [column, setColumn] = useState<string>("");
  const [data, setData] = useState<typeof coupons>(coupons);
  // Local states
  const [modalState, setModalState] = useState<boolean>(false);

  const dataLength = 50;
  const currentPage = 1;
  const optionData = [1, 2, 3, 4, 5];

  function getStatusBadge(status: string) {
    switch (status.toLowerCase()) {
      case "available":
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
      case "expired":
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
          <Checkbox  />
        </div>
      ),
    },

    {
      title: <HeaderCell title="Brand" />,
      dataIndex: "brand",
      key: "brand",
      width: 250,
      render: (brand: string) => (
        <div className="flex items-center">
          <Avatar
            src={brand}
            name={`brand_image`}
            rounded="md"
            color="primary"
            className="bg-muted"
          />
        </div>
      ),
    },
    {
      title: <HeaderCell title="Code" />,
      dataIndex: "code",
      key: "code",
      width: 200,
      render: (code: string) => <div className="text-foreground ">{code}</div>,
    },
    {
      title: <HeaderCell title="Discount" />,
      dataIndex: "discount",
      key: "discount",
      width: 200,
      render: (discount: string) => (
        <div className="text-foreground pl-4">{discount}</div>
      ),
    },
    {
      title: <HeaderCell title="Expiry Date" />,
      dataIndex: "expiry_date",
      key: "expiry_date",
      width: 250,
      render: (expiry_date: number) => (
        <div className="text-foreground font-medium">{expiry_date}</div>
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
            <button className=" flex justify-center items-center w-10 h-10 bg-gray-100 hover:bg-muted  rounded-full">
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
      <div className="text-black  font-rufina font-bold text-[24px]">
        Coupons
      </div>
      <div className="flex items-center space-x-2 text-foreground">
        <div>Discount</div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div>Coupons</div>
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
            className="bg-white text-black border-gray-200 hover:bg-black hover:text-white  space-x-2"
          >
            <ArrowUpTrayIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Export</span>
          </Button>

          <Button
            rounded="pill"
            className="bg-white text-black border-gray-200 hover:bg-black hover:text-white   space-x-2"
          >
            <FunnelIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Filter</span>
          </Button>



          <Button
            rounded="pill"
            onClick={() => setModalState(true)}
            className="bg-black text-white hover:bg-white hover:text-black hover:border-muted  space-x-2"
          >
              <PlusIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
              <span>Add new coupon</span>
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

      {/*Category Modal */}
      <Modal isOpen={modalState} onClose={() => setModalState(false)}>
        <div className="m-auto px-4 pt-6 pb-8">
          <div className="mb-4 flex  justify-between">
            <div className="space-y-2">
              <div className="text-black font-rufina font-bold text-2xl md:text-3xl">
                Add new Coupon.
              </div>
              <div className="text-sm text-foreground">
                Fill up the forms down below to add new coupon.
              </div>
            </div>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XMarkIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>

          <Input
            label="Coupon code"
            placeholder="Enter Code"
            className="mb-4"
            rounded="pill"
            size="xl"
          />
          <Input
            label="Discount"
            placeholder="Enter discount"
            className="mb-4"
            rounded="pill"
            size="xl"
          />

          {/* Button */}
          <div className="flex items-center space-x-2 rounded-full border-2 border-muted">
            <Button
              type="button"
              className="text-black hover:text-white border-2 border-muted m-1 px-6"
              rounded="pill"
              size="md"
              onClick={() => setModalState(false)}
            >
              Choose file
            </Button>
            <div className="text-foreground">No file Choosen</div>
          </div>

          <div className="flex flex-col md:flex md:flex-row md:space-x-8 space-y-2 md:space-y-0 my-4 md:ml-2 ml-20 ">
            <Radio label="Published" className="accent-black" />
            <Radio label="Pending" className="accent-black" />
            <Radio label="Draft" className="accent-black" />
          </div>

          <Button
            type="button"
            className="w-full text-black hover:text-white border-2 border-muted m-2"
            rounded="pill"
            size="lg"
            onClick={() => setModalState(false)}
          >
            {" "}
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Categories;
