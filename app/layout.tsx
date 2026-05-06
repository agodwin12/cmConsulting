import type { Metadata } from "next";
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CM Consulting — Strategy. Technology. Growth.",
    template: "%s | CM Consulting",
  },
  description:
    "CM Consulting helps businesses grow through expert strategy, IT consulting, web development, and cloud solutions.",
  keywords: ["consulting", "business strategy", "IT consulting", "cloud solutions", "web development"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}