import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";

const googleSans = Open_Sans({
  weight: "400",
  subsets: ['latin']
});

const roboto = Roboto({
  weight: "400",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "D3FAU4T's Space",
  description: "Welcome to D3FAU4T's Space! A comprehensive view of D3FAU4T's academic coursework, personal projects, and favorite hobbies! This site serves as both a portfolio and a learning ground for web design, highlighting his academic and recreational activities",
  openGraph: {
    type: "website",
    title: "D3FAU4T's Space",
    description: "Welcome to D3FAU4T's Space! A comprehensive view of D3FAU4T's academic coursework, personal projects, and favorite hobbies! This site serves as both a portfolio and a learning ground for web design, highlighting his academic and recreational activities",
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={`${googleSans.className} ${roboto.className}`}>
          {children}
      </body>
    </html>
  );
}
