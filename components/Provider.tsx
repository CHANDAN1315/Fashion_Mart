"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children }: any) {
  const [mounted, setMounted] = useState<Boolean>(false);
  

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return <ThemeProvider>{children}</ThemeProvider>;
}
