"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Context } from "./context/context";

const Page = () => {
  const router = useRouter();

  const { countryCode } = useContext(Context);

  useEffect(() => {
    router.push(`${countryCode}/browse`);
  }, []);

  return <></>;
};

export default Page;
