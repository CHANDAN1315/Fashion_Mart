"use client";
import Sidebar from "@/components/Sidebar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <section className="w-[20%] h-[100vh] max-md:w-[50%] bg-gray-200">
        {/* Global sidebar */}
        <Sidebar />
      </section>
      <section className="w-full h-full mx-4 my-2">{children}</section>
    </main>
  );
}
