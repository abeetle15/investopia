import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Investopia",
  description: "Find the next big investment",
  icons: {
    icon: "/bulb.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
