"use client";

import BaseLayout from "@/components/base-layout/baseLayout";
import Card from "@/components/card/card";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [countryCode, setCountryCode] = useState("US");

  useEffect(() => {
    console.log(countryCode);
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/schedule/?country=${countryCode}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [countryCode]);

  return (
    <>
      <Header countryCode={countryCode} setCountryCode={setCountryCode} />
      <BaseLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data &&
            data.map((item: any, index: number) => (
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
      </BaseLayout>
    </>
  );
}
