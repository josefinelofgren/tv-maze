"use client";

import Grid from "@/components/grid/grid";
import Shows from "@/components/shows/shows";
import { ShowDetailsType } from "@/types/types";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { getAllShows } from "@/utils/shows/getShows";

export default function Page() {
  const [shows, setShows] = useState<ShowDetailsType[]>([]);
  const [error, setError] = useState(false);
  const { countryCode, setCountryCode } = useContext(Context);

  useEffect(() => {
    getAllShows(countryCode, setShows, setError);
  }, [countryCode, setCountryCode]);

  return (
    <div>
      <p className="font-bold text-md mb-2">All shows</p>
      <Grid>
        <Shows shows={shows} />
      </Grid>
    </div>
  );
}
