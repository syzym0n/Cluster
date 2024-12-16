import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cluster",
  description: "Application de regroupement de succès sur Dofus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
