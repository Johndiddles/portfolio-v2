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
  metadataBase: new URL(CLIENT_ORIGIN),
  title: {
    default: "John Adepelumi | Full Stack Engineer | Software Engineer",
    template: "%s | John Adepelumi",
  },
  description:
    "John Adepelumi is a full stack engineer based in the Bahamas specializing in building exceptional digital experiences with Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "John Adepelumi",
    "Johndiddles",
    "Software developer",
    "Frontend developer",
    "Full stack engineer",
    "Web developer",
    "Bahamas developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
  ],
  authors: [{ name: "John Adepelumi", url: CLIENT_ORIGIN }],
  creator: "John Adepelumi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: CLIENT_ORIGIN,
    title: "John Adepelumi | Full Stack Engineer | Software Engineer",
    description:
      "John Adepelumi is a full stack engineer based in the Bahamas specializing in building exceptional digital experiences.",
    siteName: "John Adepelumi Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "John Adepelumi - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Adepelumi | Full Stack Engineer | Software Engineer",
    description:
      "John Adepelumi is a full stack engineer based in the Bahamas specializing in building exceptional digital experiences.",
    images: ["/opengraph-image.png"],
    creator: "@Diddlescode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: CLIENT_ORIGIN,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
