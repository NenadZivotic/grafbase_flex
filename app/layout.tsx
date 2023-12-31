import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Next.js project",
  description: "Showcase and discover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
