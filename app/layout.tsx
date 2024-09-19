import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness",
  description: "Fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative max-w-[1000px] mx-auto">
          <div className= "relative py-6 bg-white ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-6 max-w-[1000px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
