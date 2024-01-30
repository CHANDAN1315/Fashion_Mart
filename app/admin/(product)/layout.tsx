"use client";
import Sidebar from "@/components/Sidebar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex ">
      <section className="  hidden md:block w-[60%] md:w-[35%] lg:w-[25%] bg-white dark:bg-[#08090e] border-muted dark:border-[#333333] border-x-2 z-10">
        {/* Global sidebar */}
        <Sidebar />
      </section>
      <section className="w-full h-full mx-4 my-2">{children}</section>
    </main>
  );
}
