"use client";

import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SidebarContext } from "../functions/context";
import { CogIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import { Dropdown, Button, Avatar } from "rizzui";
import { useContext, useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import { motion, useAnimationControls } from "framer-motion";
import SettingCard from "./SettingCard";
import ProfileCard from "./ProfileCard";

const Navbar = () => {
  const controls = useAnimationControls();

  const { toggleFunction } = useContext(SidebarContext);
  const [buttonIsOpen, setButtonIsOpen] = useState<number>(0);

  const [greaterThan, setGreaterThan] = useState<boolean>(false);

  // const hadleButtonIsOpenClick = (e: any) => {
  //   const noti = e.target.id;
  //   const val = e.target.value;

  //   // console.log( noti, val);
  //   console.log(e)

  //   // setButtonIsOpen({
  //   //   ...buttonIsOpen,
  //   //   notification:
  //   // })
  //   controls.start("move");
  // };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) setGreaterThan(false);
      else setGreaterThan(true);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="sticky top-0 z-50 bg-white w-full flex justify-between border-muted dark:border-[#333333] border-2  py-1">
      <div className="flex items-center space-x-1 ">
        <Image
          src="/assets/logo/Subtract.svg"
          alt="logo"
          width={24}
          height={24}
          className="m-4"
        />
        <div className="text-black dark:text-white text-lg font-medium">
          Fashion Mart
        </div>
      </div>

      <div className="flex space-x-4 mr-4">
        {/* <Button variant="flat" onClick={toggleFunction}>
          switch
        </Button>

        <div className="hidden md:flex items-center p-1">
          <ThemeSwitcher />
        </div> */}

        <button
          className="bg-muted rounded-full m-auto p-2 cursor-pointer"
          onClick={() => {
            setButtonIsOpen(1);
            controls.start("move");
          }}
          style={{ display: greaterThan ? "block" : "none" }}
        >
          <BellAlertIcon width={25} height={25} id="notification" />
        </button>
        <motion.div
          variants={{
            initial: {
              y: 30,
            },
            move: {
              y: 0,
            },
            exit: {
              y: 20,
            },
          }}
          initial="initial"
          animate={controls}
          transition={{
            duration: 0.5,
          }}
          className=" bg-white absolute top-[70px] right-[160px] w-[25%] max-md:w-[60%] max-md:right-[50px]  shadow-xl rounded-lg "
          style={{
            display: buttonIsOpen === 1 && greaterThan ? "block" : "none",
          }}
        >
          <NotificationCard />
        </motion.div>

        <button
          className="bg-muted rounded-full m-auto p-2 cursor-pointer"
          onClick={() => {
            setButtonIsOpen(2);
            controls.start("move");
          }}
          style={{ display: greaterThan ? "block" : "none" }}
        >
          <CogIcon width={25} height={25} id="Setting" />
        </button>

        <motion.div
          variants={{
            initial: {
              y: 30,
            },
            move: {
              y: 0,
            },
            exit: {
              y: 20,
            },
          }}
          initial="initial"
          animate={controls}
          transition={{
            duration: 0.5,
          }}
          className=" bg-white absolute top-[70px] right-[90px] w-[25%] max-md:w-[60%] max-md:right-[50px]  shadow-xl rounded-lg "
          style={{
            display: buttonIsOpen === 2 && greaterThan ? "block" : "none",
          }}
        >
          <SettingCard />
        </motion.div>

        <button
          className="bg-muted rounded-full m-auto  cursor-pointer"
          onClick={() => {
            setButtonIsOpen(3);
            controls.start("move");
          }}
          style={{ display: greaterThan ? "block" : "none" }}
        >
          <Image
            width={40}
            height={40}
            src="/assets/avatar/user_1.png"
            alt="profile_details"
            id="profile"
          />
        </button>

        <motion.div
          variants={{
            initial: {
              y: 30,
            },
            move: {
              y: 0,
            },
            exit: {
              y: 20,
            },
          }}
          initial="initial"
          animate={controls}
          transition={{
            duration: 0.5,
          }}
          className=" bg-white absolute top-[70px] right-[40px] w-[25%] max-md:w-[60%] max-md:right-[50px]  shadow-xl rounded-lg "
          style={{
            display: buttonIsOpen === 3 && greaterThan ? "block" : "none",
          }}
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Navbar;
