import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Inter, Poppins, Jost } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { CLIENT_ORIGIN } from "@/constants/urls";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const jost = Jost({
  variable: "--font-jost",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Johndiddles Place",
  description: "Welcome to Johndiddles Place.",
  keywords:
    "John Adepelumi, Johndiddles, Software developer, frontend developer, full stack developer, web developer, web development, Javascript, Typescript, Next JS, React JS, Node JS, Express, Vue, Tailwind, Redux, Zustand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="John Adepelumi" key="title" />
        <meta property="og:image:width" content="748" />
        <meta property="og:image:height" content="196" />
        <meta
          property="og:image"
          content={`${CLIENT_ORIGIN}/opengraph-image.png`}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${jost.variable}  antialiased`}
      >
        <Header />
        {children}
        <Footer />

        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
