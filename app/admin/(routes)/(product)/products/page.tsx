"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Checkbox, Avatar, Text, Button, Input, Dropdown } from "rizzui";
import Table from "@/components/Table";
import HeaderCell from "@/components/TableHeader";
import { products } from "@/data/products";
import {
  MagnifyingGlassIcon,
  ArrowUpTrayIcon,
  FunnelIcon,
  PlusIcon,
  EllipsisVerticalIcon,
  XMarkIcon,
  TrashIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import PaginationComponent from "@/components/PaginationComponent";
import DropdownComponent from "@/components/DropdownComponent";


function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "published":
      return (
        <div className="flex items-center text-sm text-nowrap text-green-default gap-1 font-medium">
          <div className="w-1 h-1 bg-green-default rounded-full"></div>
          {status}
        </div>
      );
    case "pending":
      return (
        <div className="flex items-center text-sm text-nowrap text-orange-default gap-1 font-medium">
          <div className="w-1 h-1 bg-orange-default rounded-full"></div>
          {status}
        </div>
      );
    case "draft":
      return (
        <div className="flex items-center text-sm text-nowrap text-red-default gap-1 font-medium">
          <div className="w-1 h-1 bg-red-default rounded-full"></div>
          {status}
        </div>
      );
    default:
      return null;
  }
}

const getColumns = (order: string, column: string, clicked:boolean, setClicked: any) => [
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
    title: <HeaderCell title="Products" />,
    dataIndex: "product",
    key: "product",
    width: 350,
    render: (product: any) => (
      <div className="flex items-center">
        <Avatar
          src={product.image}
          name={`image`}
          rounded="md"
          className="hidden md:block"
        />
        <div className="ml-3 rtl:ml-0 rtl:mr-3">
          <Text className="mb-0.5 text-sm text-nowrap font-roboto font-bold">
            {product.title}
          </Text>
          <Text as="p" className="text-sm text-nowrap text-foreground">
            {product.category}
          </Text>
        </div>
      </div>
    ),
  },
  {
    title: <HeaderCell title="SKU" />,
    dataIndex: "sku",
    key: "sku",
    width: 250,
    render: (sku: string) => (
      <div className="text-sm text-nowrap text-foreground">{sku}</div>
    ),
  },
  {
    title: <HeaderCell title="Price" />,
    dataIndex: "price",
    key: "price",
    width: 200,
    render: (price: string) => (
      <div className="text-sm text-nowrap text-foreground">{price}</div>
    ),
  },
  {
    title: <HeaderCell title="Stock" />,
    dataIndex: "inStock",
    key: "inStock",
    width: 200,
    render: (active: boolean) => {
      if (active) {
        return (
          <div className="text-sm text-nowrap text-green-default font-medium">
            In Stock
          </div>
        );
      } else {
        return (
          <div className="text-sm text-nowrap text-red-default font-medium">
            Out of Stock
          </div>
        );
      }
    },
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

const Products = () => {
  const [order, setOrder] = useState<string>("desc");
  const [column, setColumn] = useState<string>("");
  const [data, setData] = useState<typeof products>(products);
  const [clicked, setClicked] = useState<boolean>(false);
  const dataLength = 50;
  const currentPage = 1;
  const optionData = [1, 2, 3, 4, 5];
  const domNode = useRef(null);

  // const toggleClick = (id: number) => {
  //   console.log(id);
  //   if (clicked === id) setClicked(0);
  //   else setClicked(id);
  //   console.log(clicked);
  // };

  // useEffect(() => {
  //   let handler = (event: any) => {
  //     if (!domNode.current?.contains(event.target)) {
  //       setClicked(0);
  //     }
  //   };
  //   document.addEventListener("click", handler);

  //   return () => {
  //     document.removeEventListener("click", handler);
  //   };
  // });

  // const onCellClick = (value: string) => ({
  //   onClick: () => {
  //     setColumn(value);
  //     // let num = data.filter((e) => e());
  //     // setClicked(num)
  //     // console.log(num)
  //     // setClicked(data.id);
  //     // console.log(num, value, clicked);
  //   },
  // });

  const columns: any = useMemo(
    () => getColumns(order, column, clicked, setClicked),
    [order, column]
  );

  return (
    <>
      {/* Heding section */}
      <div className=" text-black dark:text-white font-rufina font-bold text-[24px]">
        Products
      </div>
      <div className="flex items-center space-x-2 text-foreground">
        <div>E-commerce</div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div>Products</div>
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
            className=" bg-white text-black border-gray-200 hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-[#333333] dark:hover:bg-white dark:hover:text-black space-x-2"
          >
            <FunnelIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Filter</span>
          </Button>

          <Button
            rounded="pill"
            className="bg-black text-white hover:bg-white hover:text-black hover:border-muted dark:bg-white dark:text-black dark:border-[#333333] dark:hover:bg-black dark:hover:text-white space-x-2"
          >
            <PlusIcon strokeWidth="2" className="h-4 w-4 space-x-4 " />
            <span>Add Product</span>
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

export default Products;
