"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Grid from "@/components/grid/grid";
import Shows from "@/components/shows/shows";
import { ShowDetails } from "@/types/types";
import { useEffect, useState } from "react";

export default function Page() {
  const [shows, setShows] = useState<ShowDetails[]>([]);
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const query = searchParams.get("q");

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/search/?q=${query}`);
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

    if (query === "") {
      router.push("/browse");
    }
  }, [searchParams]);

  return (
    <Grid>
      <Shows shows={shows} />
    </Grid>
  );
}
