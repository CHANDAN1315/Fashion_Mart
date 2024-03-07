"use client";
import { sidebarData } from "@/data/sidebarData";
import {
  HomeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [dropDown, setDropdown] = useState<Number>(0);

  const menuAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
      },
    },
  };

  const toggleDropdown = (id: Number) => {
    if (dropDown === id) return setDropdown(0);
    setDropdown(id);
  };

  return (
    <div className="h-[100vh] ">
      <div className="flex space-x-2 items-center py-2 pl-3  ">
        <HomeIcon width={24} height={24} />
        <span className="text-black font-roboto dark:text-white">
          Dashboard
        </span>
      </div>
      <div>
        <AnimatePresence>
          {sidebarData.map((item) => (
            <motion.div
              initial={{ opacity: 0, x: "auto" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "auto" }}
              transition={{
                duration: 0.5,
              }}
              key={item.id}
            >
              <div
                className={` ${
                  dropDown !== item.id
                    ? "bg-white text-black hover:bg-muted"
                    : " bg-black text-white"
                }  flex justify-between py-2 my-2 cursor-pointer duration-500`}
                onClick={() => toggleDropdown(item.id)}
              >
                <div className="flex space-x-2 ">
                  {dropDown === item.id && (
                    <div className="border-l-4  pl-3"></div>
                  )}
                  <item.icon width={24} height={24} className="ml-3" />
                  <span className="text-nowrap">{item.title}</span>
                </div>

                <div className="cursor-pointer mr-2">
                  {dropDown !== item.id ? (
                    <ChevronDownIcon width={24} height={24} />
                  ) : (
                    <ChevronUpIcon width={24} height={24} />
                  )}
                </div>
              </div>

              {item.links.map((link) => (
                <div key={link.text}>
                  <AnimatePresence>
                    {dropDown === item.id && (
                      <motion.div
                        variants={menuAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex items-center space-x-2 ml-8 mt-1 text-foreground hover:cursor-pointer hover:text-black dark:hover:text-white hover:font-medium"
                      >
                        <div className="w-1 h-1 bg-foreground rounded-full mx-2 my-3  "></div>
                        <Link href={link.url}>{link.text}</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Sidebar;
