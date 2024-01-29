"use client";

import { useTheme } from "next-themes";
import { ActionIcon, Dropdown } from "rizzui";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted) return null;


  return (
    <Dropdown>
      <Dropdown.Trigger>
        <ActionIcon variant="outline" rounded="full">
          <SunIcon className="h-5 w-5 dark:hidden" />
          <MoonIcon className="absolute h-5 w-5 hidden dark:block" />
          <span className="sr-only">Toggle theme</span>
        </ActionIcon>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setTheme("light")}>Light</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("dark")}>Dark</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("system")}>System</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}