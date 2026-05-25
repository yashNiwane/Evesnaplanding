import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig, absoluteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default:
      "Creoxy - Private Event Photo Sharing App for Parties, Birthdays & Celebrations",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  category: "photo app",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title:
      "Creoxy - Private Event Photo Sharing App for Parties, Birthdays & Celebrations",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Creoxy private event photo sharing app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Creoxy - Private Event Photo Sharing App for Parties, Birthdays & Celebrations",
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

