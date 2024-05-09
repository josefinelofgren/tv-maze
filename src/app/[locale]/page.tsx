"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const currentPathname = usePathname();

  const locales = ["gb", "global", "us", "uk"];
  const isLocale = locales.some((locale) =>
    currentPathname.includes(`/${locale}`)
  );

  useEffect(() => {
    if (isLocale && !currentPathname.endsWith("/browse")) {
      router.push(`${currentPathname}/browse`);
    } else {
      router.push(`global/browse`);
    }
  });

  return <></>;
};

export default Page;
