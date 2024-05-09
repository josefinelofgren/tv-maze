"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Context } from "./context/context";

const Page = () => {
  const router = useRouter();

  const { locale } = useContext(Context);

  useEffect(() => {
    router.push(`${locale}/browse`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Page;
