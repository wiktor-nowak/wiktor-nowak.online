import type { Metadata } from "next";
import "@/src/styles/globals.scss";
import Header from "@/src/components/LayoutComponents/Header/Header";
import Footer from "@/src/components/LayoutComponents/Footer/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | wiktor-nowak.online",
    default: "Home | wiktor-nowak.online"
  },
  description:
    "Self taught JavaScript Programmer with one year of commercial experience working as Frontend Developer. Eager to build my career and hungry for more experience in building web applications."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
