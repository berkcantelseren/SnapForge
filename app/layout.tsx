import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { ResponsiveNavbar } from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnapForge",
  description:
    "Generate AI-powered social media posts and templates for your business or personal brand with SnapForge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
