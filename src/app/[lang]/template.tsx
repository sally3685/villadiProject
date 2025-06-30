"use client";

import { animatePageIn } from "@/app/utils/animations";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    animatePageIn(pathname);
  }, []);
  return <>{children}</>;
}
