"use client";
import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Digital Marketing Agency - Welcome to MARKETEER</title>
        <meta
          name="description"
          content="Mary's simple recipe for maple bacon donuts
           makes a sticky, sweet treat with just a hint
           of salt that you'll keep coming back for."
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div data-aos="fade-up">
          <Navbar />
        </div>
        {children}
        <div data-aos="fade-right">
          <Footer />
        </div>
      </body>
    </html>
  );
}
