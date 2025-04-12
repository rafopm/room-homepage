import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
 
export const metadata: Metadata = {
  title: "Room homepage",
  description: "Room homepage",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
      <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
