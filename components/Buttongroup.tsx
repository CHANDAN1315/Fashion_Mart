import {
  ArchiveBoxIcon,
  BellAlertIcon,
  CogIcon,
  MapPinIcon,
  PencilIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { Button } from "rizzui";

const Buttongroup = () => {
  return (
    <div>
      <div className="flex overflow-auto space-x-8 mt-4 px-4 ">
        <Link href="http://localhost:3000/admin/my_profile">
          <Button
            variant="solid"
            rounded="pill"
            className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
          >
            <UsersIcon width={20} />
            <span className="">My Profile</span>
          </Button>
        </Link>
        <Link href="http://localhost:3000/admin/edit_profile">
          <Button
            variant="solid"
            rounded="pill"
            className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
          >
            <PencilIcon width={20} />
            <span className="">Edit profile</span>
          </Button>
        </Link>
        <Link href="http://localhost:3000/admin/notification">
          <Button
            variant="solid"
            rounded="pill"
            className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
          >
            <BellAlertIcon width={20} />
            <span className="">Notification</span>
          </Button>
        </Link>

        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
        >
          <ArchiveBoxIcon width={20} />
          <span className="">My orders</span>
        </Button>

        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
        >
          <MapPinIcon width={20} />
          <span className="">Addresses</span>
        </Button>

        <Button
          variant="solid"
          rounded="pill"
          className="text-black hover:text-white border-2 dark:text-white dark:hover:bg-white dark:hover:text-black border-muted dark:border-[#333333] gap-2 py-4 px-6"
        >
          <CogIcon width={20} />
          <span className="">Settings</span>
        </Button>
      </div>
      <div className="border-t-2 border-muted dark:border-[#333333] mt-4"></div>
    </div>
  );
};

export default Buttongroup;
