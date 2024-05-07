"use client";

import Card from "@/components/card/card";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/schedule");
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
  }, []);

  return (
    <div className="container mx-auto py-4">
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
    </div>
  );
}
