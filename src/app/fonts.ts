import { Montserrat, Raleway, Pacifico } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
  weight: "400",
});
