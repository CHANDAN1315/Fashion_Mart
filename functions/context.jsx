"use client";
import { createContext, useState } from "react";
const SidebarContext = createContext(true);

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFunction = () => {
    setIsOpen(!isOpen);
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleFunction }} >
      {children}
    </SidebarContext.Provider>
  );
};
export {SidebarContext, SidebarProvider};