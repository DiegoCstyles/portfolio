"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect, ReactNode } from "react";

interface Props { children?: ReactNode } // Define the Props interface (type)

// Define the Providers component
export default function Providers({ children }: Props) {
  
  const [mounted, setMounted] = useState(false); // State to track whether the component is mounted or not

  useEffect(() => { setMounted(true); }, []); // Run the effect only once to set the mounted state to true

  if (!mounted) { return <>{children}</>; } // If the component is not mounted yet, return the children as is

  // If the component is mounted, wrap the children with the ThemeProvider component
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}