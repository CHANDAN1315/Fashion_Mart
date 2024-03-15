"use client";

import {
  ArchiveBoxIcon,
  BellAlertIcon,
  CogIcon,
  MapPinIcon,
  PencilIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "rizzui";

const Buttongroup = () => {
  return (
    <div className="">
      <div className="flex overflow-scroll no-scrollbar space-x-6 mt-4 px-4 ">
        <Link href="/admin/my_profile">
          <Button
            variant="solid"
            rounded="pill"
            className={`$ text-black hover:text-white border-2  border-muted  gap-2 py-4 px-6`}
          >
            <UsersIcon width={20} />
            <span className="w-20">My Profile</span>
          </Button>
        </Link>
        <Link href="/admin/edit_profile">
          <Button
            variant="solid"
            rounded="pill"
            className={` text-black hover:text-white border-2   border-muted  gap-2 py-4 px-6`}
          >
            <PencilIcon width={20} />
            <div className="w-20">Edit profile</div>
          </Button>
        </Link>
        <Link href="/admin/notification">
          <Button
            variant="solid"
            rounded="pill"
            className="text-black hover:text-white border-2  border-muted  gap-2 py-4 px-6"
          >
            <BellAlertIcon width={20} />
            <div className="w-20">Notification</div>
          </Button>
        </Link>
        <Link href="/admin/my_order">
          <Button
            variant="solid"
            rounded="pill"
            className="text-black hover:text-white border-2  border-muted  gap-2 py-4 px-6"
          >
            <ArchiveBoxIcon width={20} />
            <span className="w-20">My orders</span>
          </Button>
        </Link>
        <Link href="/admin/address">
          <Button
            variant="solid"
            rounded="pill"
            className="text-black hover:text-white border-2  border-muted gap-2 py-4 px-6"
          >
            <MapPinIcon width={20} />
            <span className="w-20">Addresses</span>
          </Button>
        </Link>

        <Link href="/admin/settings">
          <Button
            variant="solid"
            rounded="pill"
            className="text-black hover:text-white border-2  border-muted  gap-2 py-4 px-6"
          >
            <CogIcon width={20} />
            <span className="w-20">Settings</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Buttongroup;
