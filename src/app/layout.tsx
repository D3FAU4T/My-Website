import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    locale: "en_GB",
    type: "website",
    title: "D3FAU4T's Space",
    description: "Welcome to D3FAU4T's Space! A comprehensive view of D3FAU4T's academic coursework, personal projects, and favorite hobbies! This site serves as both a portfolio and a learning ground for web design, highlighting his academic and recreational activities",
    images: {
      url: "https://d3fau4t.vercel.app/Assets/favicon.png",
      type: "image/png",
      width: 256,
      height: 256,
      alt: "D3FAU4TBOT icon",
      secureUrl: "https://d3fau4t.vercel.app/Assets/favicon.png"
    }
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
        <link id="theme-color" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark-dimmed.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" defer></script>
      </head>
      <body className={`${googleSans.className} ${roboto.className}`}>
          {children}
          <Script strategy="afterInteractive">
          {
            `function copyContent(id) {
              const icon = document.getElementById(\`\${id}i\`);
              icon.textContent = "check";
              navigator.clipboard.writeText(document.getElementById(\`\${id}code\`).textContent);
              setTimeout(() => icon.textContent = "content_copy", 500);
            }`
          }
          </Script>
      </body>
    </html>
  );
}
