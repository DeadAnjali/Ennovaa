import { Work_Sans } from "next/font/google";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

import Room from "./Room";

import Home from "@/components/Home/HomePage";
import LoginPage from "@/components/login/page";
import SignupPage from "@/components/signup/page";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'

export const metadata = {
  title: "Ennovaaa",
  description:
    "a tool using fabric.js and Liveblocks for realtime collaboration",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      {/* <Room>
        <TooltipProvider>{children}</TooltipProvider>
      </Room> */}
      {/* <Home /> */}
      {/* <LoginPage /> */}
      <SignupPage />
    </body>
  </html>
);

export default RootLayout;
