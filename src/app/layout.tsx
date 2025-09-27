import type { Metadata } from "next";
import "./globals.css";
import { gameConfig } from "@/config/gameConfig";
import WebVitals from "@/components/WebVitals";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? `https://${gameConfig.site.domain}` 
    : 'http://localhost:3000'
  ),
  title: `${gameConfig.site.title} | hades2.org`,
  description: gameConfig.site.description,
  keywords: [gameConfig.game.name, gameConfig.game.developer, "roguelike", "action RPG", "gameplay", "early access"],
  authors: [{ name: `${gameConfig.site.title} Team` }],
  openGraph: {
    title: `${gameConfig.site.title} | hades2.org`,
    description: gameConfig.site.description,
    url: `https://${gameConfig.site.domain}`,
    siteName: gameConfig.site.title,
    images: [
      {
        url: gameConfig.images.logo,
        width: 1200,
        height: 630,
        alt: gameConfig.site.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${gameConfig.site.title} | hades2.org`,
    description: gameConfig.site.description,
    images: [gameConfig.images.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="icon" href="/h-mystical.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/h-mystical.svg" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
