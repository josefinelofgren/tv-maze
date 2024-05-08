"use client";

import Grid from "@/components/grid/grid";
import Shows from "@/components/shows/shows";
import { Show } from "@/types/types";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";

export default function Page() {
  const [shows, setShows] = useState<Show[]>([]);
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
        setShows(responseData);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [countryCode, setCountryCode]);

  return (
    <Grid>
      <Shows shows={shows} />
    </Grid>
  );
}
