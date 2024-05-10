import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import Intro from "@/components/landing/intro";
import FeatureSection from "@/components/landing/features";
import AboutSection from "@/components/landing/about";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "elimu learning platform",
  description: "developed using next App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          <Intro />
          <h1 className="flex font-bold text-2xl px-2 pt-4 justify-center align-middle mt-1">
            Sign Up/Sign In
          </h1>
          {children}
          <FeatureSection />
          <AboutSection />
        </body>
      </html>
    </ClerkProvider>
  );
}
