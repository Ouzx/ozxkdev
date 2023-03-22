"use client";
import { SessionProvider } from "next-auth/react";

import { montserrat, raleway, pacifico } from "./fonts";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Bottom from "./Components/Footer/Bottom/Bottom";
import Resume from "./Components/Resume/Resume";
import BacktoTop from "@/Components/BacktoTop/BacktoTop";
import { Analytics } from "@vercel/analytics/react";

import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`app ${montserrat.variable} ${raleway.variable} ${pacifico.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider>
          <div className="layout">
            <Header />
            <div>{children}</div>
            <Footer />
            <Bottom />
          </div>
        </SessionProvider>
        <Resume />
        <BacktoTop />
        <Analytics />
      </body>
    </html>
  );
}
