"use client";
import Sidebar from "@/components/Sidebar";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "@/functions/context";
import { motion } from "framer-motion";
export default function ProductsLayout({children}) {
  const { isOpen } = useContext(SidebarContext);

  const [greaterThan, setGreaterThan] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setGreaterThan(false);
      else setGreaterThan(true);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <main className="relative flex">
      <motion.section

        className={`${isOpen && greaterThan ? "w-20 opacity-0": "w-[60%] md:w-[35%] lg:w-[20%]"}  fixed md:static z-10  bg-white border-muted border-x-2 duration-500 `}
      >
        {/* greater > 700px   block    g - 0 1 -> false*/}
        {/* Global sidebar */}
        <Sidebar />
      </motion.section>
      <section className="w-full px-4 lg:w-[80%] h-full md:mx-4 my-2">
        {children}
      </section>
    </main>
  );
}
