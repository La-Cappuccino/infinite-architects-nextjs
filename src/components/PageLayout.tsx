"use client";

import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "90px", minHeight: "100vh", overflowX: "hidden", maxWidth: "100vw" }}>{children}</main>
      <Footer />
    </>
  );
}
