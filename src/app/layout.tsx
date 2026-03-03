import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

import SmoothScroll from "@/components/providers/smooth-scroll";

export const metadata: Metadata = {
  title: "Ziptech Limited — A People First Digital Studio",
  description: "Ziptech Limited is a global branding and digital design agency rooted in Vienna and Cape Town.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
