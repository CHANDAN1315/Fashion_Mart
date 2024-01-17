"use client";
import Sidebar from "@/components/Sidebar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <section className="w-[20%] max-md:w-[50%] bg-white border-muted border-x-2">
        {/* Global sidebar */}
        <Sidebar />
      </section>
      <section className="w-full h-full mx-4 my-2">{children}</section>
    </main>
  );
}
