import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

export const metadata = {
  title: "Jor's Portfolio",
  description:
    "Computer Science undergraduate based in Bandung, bridging data science, machine learning, and software engineering. Building things people obsess over.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bodoni.variable}`}>
      <body>{children}</body>
    </html>
  );
}
