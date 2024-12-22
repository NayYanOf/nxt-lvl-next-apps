import type { Metadata } from "next";
import "./globals.css";
import Header from "./theme/layout/Header";
import Footer from "./theme/layout/Footer";

export const metadata: Metadata = {
  title: "My Next Apps Evolution",
  description: "I'm trying to increase my JS & Next.JS abilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="flex flex-col items-center justify-center gap-4 h-screen">
          <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}