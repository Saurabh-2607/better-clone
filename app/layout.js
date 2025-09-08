import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNavbar from "./components/FloatingNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Better Mortgage Clone",
  description: "A pixel-perfect clone of Better.com's website built with Next.js 15, React 19, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
