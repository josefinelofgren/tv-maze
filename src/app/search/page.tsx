"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Grid from "@/components/grid/grid";
import Shows from "@/components/shows/shows";
import { ShowDetailsType } from "@/types/types";
import { useContext, useEffect, useState } from "react";
import { getShowsBySearch } from "@/utils/shows/getShows";
import { Context } from "../context/context";

export default function Page() {
  const [shows, setShows] = useState<ShowDetailsType[]>([]);
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { locale } = useContext(Context);

  useEffect(() => {
    const query = searchParams.get("q");
    getShowsBySearch(query, setShows, setError);

    if (query === "") {
      router.push(`${locale}/browse`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Grid>
      <Shows shows={shows} />
    </Grid>
  );
}
