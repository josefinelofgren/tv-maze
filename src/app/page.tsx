"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);
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
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        schedule
      </main>
    </>
  );
}
