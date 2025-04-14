import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Academia Acreana de Letras",
  description: "Portal da Academia Acreana de Letras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
    <body suppressHydrationWarning>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
  );
}
