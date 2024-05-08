import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/index.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TVmaze Web App",
  description:
    "Discover your favorite TV shows effortlessly with our TVmaze Web Application. By seamlessly integrating with the TVmaze Public REST API, we bring you comprehensive information about TV shows right at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
