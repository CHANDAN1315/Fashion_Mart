"use client";

import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SidebarContext } from "../functions/context";
import { CogIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import { Dropdown, Button, Avatar } from "rizzui";
import { useContext, useEffect, useRef, useState } from "react";
import NotificationCard from "./NotificationCard";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import SettingCard from "./SettingCard";
import ProfileCard from "./ProfileCard";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const controls = useAnimationControls();

  const { toggleFunction } = useContext(SidebarContext);

  let notificationRef = useRef(null);
  let settingRef = useRef(null);
  let profileRef = useRef(null);
  const [buttonIsOpen, setButtonIsOpen] = useState<number>(0);

  const [greaterThan, setGreaterThan] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) setGreaterThan(false);
      else setGreaterThan(true);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let handler = (e: any) => {
      if (
        !notificationRef.current?.contains(e.target) &&
        !settingRef.current?.contains(e.target) &&
        !profileRef.current?.contains(e.target)
      ) {
        setButtonIsOpen(0);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });

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
        <div className="text-black dark:text-white text-lg font-medium max-md:hidden">
          Fashion Mart
        </div>
        <Bars3Icon
          width={25}
          height={25}
          onClick={toggleFunction}
          className="md:hidden"
        />
      </div>

      <div className="flex space-x-4 mr-4">
        {/* 
        <div className="hidden md:flex items-center p-1">
          <ThemeSwitcher />
        </div> */}

        <div className="mt-2" ref={notificationRef}>
          <button
            className={` bg-muted rounded-full m-auto p-2 cursor-pointer`}
            onClick={() => {
              if (buttonIsOpen === 1) return setButtonIsOpen(0);
              setButtonIsOpen(1);
              controls.start("move");
            }}
          >
            <BellAlertIcon width={25} height={25} id="notification" />
          </button>
          <AnimatePresence>
            {buttonIsOpen === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{
                  duration: 0.5,
                }}
                className={`${
                  buttonIsOpen === 1 && greaterThan ? "block" : "hidden"
                } bg-white absolute top-[70px] right-[160px] w-[25%] max-md:w-[60%] max-md:right-[50px]  shadow-xl rounded-lg `}
              >
                <NotificationCard />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-2" ref={settingRef}>
          <button
            className="bg-muted rounded-full m-auto p-2 cursor-pointer"
            onClick={() => {
              if (buttonIsOpen === 2) return setButtonIsOpen(0);
              setButtonIsOpen(2);
              controls.start("move");
            }}
          >
            <CogIcon width={25} height={25} id="Setting" />
          </button>
          <AnimatePresence>
            {buttonIsOpen === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{
                  duration: 0.5,
                }}
                className={`${
                  buttonIsOpen === 2 && greaterThan ? "block" : "hidden"
                } bg-white absolute top-[70px] right-[90px] w-[25%] max-md:w-[60%] max-md:right-[50px]  shadow-xl rounded-lg `}
              >
                <SettingCard />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-2" ref={profileRef}>
          <button
            className="bg-muted rounded-full m-auto  cursor-pointer"
            onClick={() => {
              if (buttonIsOpen === 3) return setButtonIsOpen(0);
              setButtonIsOpen(3);
              controls.start("move");
            }}
          >
            <Image
              width={40}
              height={40}
              src="/assets/avatar/user_1.png"
              alt="profile_details"
              id="profile"
            />
          </button>
          <AnimatePresence>
            {buttonIsOpen === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{
                  duration: 0.5,
                }}
                className={`${
                  buttonIsOpen === 3 && greaterThan ? "block" : "hidden"
                } bg-white absolute top-[70px] right-[40px] w-[25%] max-md:w-[60%] max-md:right-[50px]  shadow-xl rounded-lg `}
              >
                <ProfileCard />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
