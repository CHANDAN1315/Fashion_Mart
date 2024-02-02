"use client";

import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { CogIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import { ActionIcon, Dropdown } from "rizzui";
const Navbar = () => {
  return (
    <section className="w-full flex justify-between border-muted dark:border-[#333333] border-y-2 py-1">
      <div className="flex items-center space-x-1 ">
        <Image
          src="/assets/logo/Subtract.svg"
          alt="logo"
          width={24}
          height={24}
          className="m-4"
        />
        <div className=" text-black dark:text-white text-lg font-medium">
          Fashion Mart
        </div>
      </div>

      <div className="flex space-x-4 mr-4">
        <div className="hidden md:flex items-center p-1">
          <ThemeSwitcher />
        </div>
        <Dropdown placement="bottom-end">
          <Dropdown.Trigger>
            <ActionIcon
              variant="outline"
              rounded="full"
              className="hidden md:flex items-center bg-muted dark:bg-[#333333] rounded-full m-2 px-2 "
            >
              <BellAlertIcon width={25} height={25} />
            </ActionIcon>
          </Dropdown.Trigger>
          <Dropdown.Menu className="  divide-y mx-auto">
            <Dropdown.Item>Notification 1</Dropdown.Item>
            <Dropdown.Item>Notification 2</Dropdown.Item>
            <Dropdown.Item>Notification 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="hidden md:flex items-center bg-muted dark:bg-[#333333] rounded-full m-2 px-2 ">
          <CogIcon width={25} height={25} />
        </div>

        <Dropdown placement="bottom-end">
          <Dropdown.Trigger>
            <div className="mt-2">
              <Image
                src="/assets/avatar/user_1.png"
                alt="user_logo"
                width={40}
                height={0}
              />
            </div>
          </Dropdown.Trigger>
          <Dropdown.Menu className=" md:hidden divide-y mx-auto">
            <Dropdown.Item>
              <ThemeSwitcher />
            </Dropdown.Item>
            <Dropdown.Item>
              <Dropdown placement="bottom-end">
                <Dropdown.Trigger>
                  <div>Notificaiton</div>
                </Dropdown.Trigger>
                <Dropdown.Menu className="  divide-y mx-auto">
                  <Dropdown.Item>Notification 1</Dropdown.Item>
                  <Dropdown.Item>Notification 2</Dropdown.Item>
                  <Dropdown.Item>Notification 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>Upgrade</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </section>
  );
};

export default Navbar;
