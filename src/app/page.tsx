"use client";

import BaseLayout from "@/components/base-layout/baseLayout";
import Grid from "@/components/grid/grid";
import Schedule from "@/components/schedule/schedule";

export default function Page() {
  return (
    <BaseLayout>
      <Grid>
        <Schedule />
      </Grid>
    </BaseLayout>
  );
}
