"use client";

import { Context } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import Card from "../card/card";

const Schedule = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const { countryCode, setCountryCode } = useContext(Context);

  useEffect(() => {
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
  }, [countryCode, setCountryCode]);

  return (
    <>
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
    </>
  );
};

export default Schedule;
