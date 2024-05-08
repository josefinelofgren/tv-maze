"use client";

import BaseLayout from "@/components/base-layout/baseLayout";
import Favorites from "@/components/favorites/favorites";
import Grid from "@/components/grid/grid";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Page() {
  return (
    <BaseLayout>
      <Favorites />
    </BaseLayout>
  );
}
