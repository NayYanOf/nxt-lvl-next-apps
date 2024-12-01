import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}