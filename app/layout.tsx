import type { Metadata } from "next";
import "./globals.css";
import StickyBlur from "./components/StickyBlur";

export const metadata: Metadata = {
  title: "Jordhy Branenda - Portfolio",
  description: "Computer Science @ ITB - Learning relentlessly. Building intentionally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
        />
      </head>
      <body className="antialiased">
        {children}
        <StickyBlur />
      </body>
    </html>
  );
}
