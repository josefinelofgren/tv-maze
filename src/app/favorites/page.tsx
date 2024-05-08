"use client";

import BaseLayout from "@/components/base-layout/baseLayout";
import Card from "@/components/card/card";
import Header from "@/components/header/header";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [countryCode, setCountryCode] = useState("US");

  const updateDataFromStorage = () => {
    const favoritesData = localStorage.getItem("favorites");
    if (favoritesData) {
      setData(JSON.parse(favoritesData));
    }
  };

  useEffect(() => {
    updateDataFromStorage();
  }, []);

  return (
    <>
      <Header countryCode={countryCode} setCountryCode={setCountryCode} />
      <BaseLayout>
        {data.length === 0 ? (
          <>
            <div className="mt-4">
              <h1 className="text-center text-2xl text-gray-800 mt-8 font-bold">
                No favorites added
              </h1>
              <Link href="/">
                <p className="mt-4 text-center text-sm hover:underline text-blue-500 hover:underline cursor-pointer">
                  Back to all shows
                </p>
              </Link>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item: any, index: number) => (
              <div key={index} className="relative">
                <Card
                  id={item.id}
                  title={item.name}
                  image={item.image}
                  genres={item.genres}
                  length={item.length}
                />
              </div>
            ))}
          </div>
        )}
      </BaseLayout>
    </>
  );
}
