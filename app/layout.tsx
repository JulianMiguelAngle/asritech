import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asri Tech: Make your dream website come true",
  description: "We craft stunning Static Next.js landing pages, dynamic Next.js company profiles with blogs, and fully functional Next.js sites with CRUD capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolageGrotesque.className}>{children}</body>
    </html>
  );
}
