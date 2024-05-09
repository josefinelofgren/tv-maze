"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const currentPathname = usePathname();
    if (!currentPathname.endsWith("/browse")) {
      router.push(`${currentPathname}/browse`);
    }
  });
  return <></>;
};

export default Page;
