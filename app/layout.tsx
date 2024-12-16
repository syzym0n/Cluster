import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Cluster',
  description: 'Application de partage des succès de Dofus',
  icons: {
    icon: '/icons/32icon.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/iosIcon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/32Icon.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/16Icon.png"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
