"use client";

import { useState, useMemo } from "react";
import { Checkbox, Avatar, Text , Dropdown, Button, Input } from "rizzui";
import Table from "@/components/Table";
import HeaderCell from "@/components/TableHeader";
import { products } from "@/data/products";
import {
  MagnifyingGlassIcon,
  ArrowUpTrayIcon,
  FunnelIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import PaginationComponent from "@/components/PaginationComponent";
import DropdownComponent from "@/components/DropdownComponent";

const Products = () => {
  const [order, setOrder] = useState<string>("desc");
  const [column, setColumn] = useState<string>("");
  const [data, setData] = useState<typeof products>(products);

  const dataLength = 50;
  const currentPage = 1;
  const optionData = [1,2,3,4,5]

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
      title: <HeaderCell title="Products" />,
      dataIndex: "product",
      key: "product",
      width: 250,
      render: (product: any) => (
        <div className="flex items-center">
          <Avatar src={product.image} name={`image`} rounded="md" />
          <div className="ml-3 rtl:ml-0 rtl:mr-3">
            <Text className="mb-0.5 !text-sm font-roboto font-bold">
              {product.title}
            </Text>
            <Text as="p" className="text-xs text-foreground">
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
      render: (sku: string) => <div className="text-foreground">{sku}</div>,
    },
    {
      title: <HeaderCell title="Price" />,
      dataIndex: "price",
      key: "price",
      width: 250,
      render: (price: string) => <div className="text-foreground">{price}</div>,
    },
    {
      title: <HeaderCell title="Stock" />,
      dataIndex: "inStock",
      key: "inStock",
      width: 250,
      render: (active: boolean) => {
        if (active) {
          return <div className="text-green-default font-medium">In Stock</div>;
        } else {
          return (
            <div className="text-red-default font-medium">Out of Stock</div>
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
        Products
      </div>
      <div className="flex items-center space-x-2 text-foreground">
        <div>E-commerce</div>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div>Products</div>
      </div>
      <div className="flex justify-between mt-2">
        <Input
          prefix={<MagnifyingGlassIcon className="w-4" />}
          placeholder="Search"
          rounded="pill"
        />

        {/* Buttons sections */}

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
            <span>Add Product</span>
          </Button>
        </div>
      </div>

      {/* Table section */}

      <Table data={data} columns={columns} className="text-sm  my-4" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <DropdownComponent title={"Rows Per Page"} optionData={optionData}/>
        <PaginationComponent
          dataLength={dataLength}
          defaultCurrent={currentPage}
        />
      </div>
    </>
  );
};

export default Products;
