import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import Providers from "@/components/providers";

import { Inter } from "next/font/google";

import Navbar from "@/components/nav/Navbar";
import { Toaster } from "@/components/ui/Toaster";

export const metadata = {
  title: "Superhub",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal?: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <div className='container max-w-7xl mx-auto h-full pt-12'>
            {authModal}
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
