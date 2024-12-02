import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dofus Cluster",
  description: "Retrouvez l'avancée de tous vos amis dans une seul application",
  icons : {
    icon : [
      { url : 'favicon.ico'},
    ],
    apple: [
      { url : '/appleIcon.png' },
    ]
  }
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
