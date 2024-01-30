"use client";
import Sidebar from "@/components/Sidebar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex ">
      <section className="hidden md:block md:w-[20%] bg-white dark:bg-[#08090e] border-muted dark:border-[#333333] border-x-2">
        {/* Global sidebar */}
        <Sidebar />
      </section>
      <section className="w-[100%] md:w-[80%]">{children}</section>
    </main>
  );
}
