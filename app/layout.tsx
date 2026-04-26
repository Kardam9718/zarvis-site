import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Kardam | zarvis.tech",
  description:
    "Elite Website Designer & Digital Architect crafting high-converting digital empires."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
