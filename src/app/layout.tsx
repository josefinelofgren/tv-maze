"use client";

import React from "react";
import { Inter } from "next/font/google";
import "./../styles/index.css";
import BaseLayout from "@/components/base-layout/baseLayout";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
