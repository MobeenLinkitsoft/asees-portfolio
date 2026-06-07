import type { Metadata } from "next";
import localFont from "next/font/local"; // Import localFont utility
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

// Configure Gilroy local font families
const gilroy = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy", // Define a CSS variable name
});

export const metadata: Metadata = {
  title: "ASEES General Construction | Masonry & Roofing Experts Queens, NY",
  description: "Licensed & insured construction experts in Queens, NY. Specializing in brick pointing, roofing, waterproofing, parapet walls, and lintels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply the font variable to the body element */}
      <body className={`${gilroy.className} bg-slate-50 text-slate-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}