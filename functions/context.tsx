"use client";
import { createContext, useState } from "react";
const SidebarContext = createContext(true);

const SidebarProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleFunction = (): any => {
    setIsOpen(!isOpen);
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleFunction }} >
      {children}
    </SidebarContext.Provider>
  );
};
export {SidebarContext, SidebarProvider};