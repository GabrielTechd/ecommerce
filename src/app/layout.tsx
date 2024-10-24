import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/navbar/navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-700">
        <Navbar />
        <main className="h-screen p-16">{children}</main>
      </body>
    </html>
  );
}
