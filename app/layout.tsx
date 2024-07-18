import type { Metadata } from "next";
import { Quintessential} from "next/font/google";
import "./globals.css";

const inter = Quintessential({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony Haven",
  description: "El refugio de tu armonía",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
