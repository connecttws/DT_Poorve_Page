import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Decoded Diet By Poorvi | Personalised Nutrition Guidance",
  description: "Personalised Nutrition Guidance for Weight Loss, Thyroid & Blood Sugar Management. Start following a nutrition plan designed for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-stone-50 text-stone-900">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
