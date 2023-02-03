import { montserrat, raleway } from "./fonts";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Bottom from "./Components/Footer/Bottom/Bottom";
import Resume from "./Components/Resume/Resume";
import BacktoTop from "@/Components/BacktoTop/BacktoTop";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`app ${montserrat.variable} ${raleway.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="layout">
          <Header />
          <div>{children}</div>
          <Footer />
          <Bottom />
        </div>
        <Resume />
        <BacktoTop />
      </body>
    </html>
  );
}
