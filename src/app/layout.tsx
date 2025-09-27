import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JRNL - AI-Powered Private Journaling | Write. Understand. Grow.",
  description: "The AI-powered journaling companion that helps you discover patterns in your thoughts and emotions—while keeping your privacy intact. Join the waitlist for early access.",
  keywords: ["journaling", "AI", "privacy", "emotional intelligence", "self-improvement", "mental health"],
  authors: [{ name: "JRNL Team" }],
  creator: "JRNL",
  openGraph: {
    title: "JRNL - Write. Understand. Grow.",
    description: "The AI-powered journaling companion that helps you discover patterns in your thoughts and emotions—while keeping your privacy intact.",
    url: "https://jrnl.app",
    siteName: "JRNL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JRNL - AI-Powered Private Journaling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JRNL - Write. Understand. Grow.",
    description: "The AI-powered journaling companion that helps you discover patterns in your thoughts and emotions—while keeping your privacy intact.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JRNL",
  "description": "AI-powered private journaling app that helps you discover patterns in your thoughts and emotions while keeping your privacy intact.",
  "url": "https://jrnl.app",
  "applicationCategory": "Lifestyle",
  "operatingSystem": "iOS, Android, Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free tier available with premium features"
  },
  "featureList": [
    "AI-powered insights",
    "End-to-end encryption",
    "Emotional pattern tracking",
    "Smart reflection prompts",
    "Offline capability",
    "Data export"
  ],
  "releaseNotes": "Coming Q1 2026",
  "provider": {
    "@type": "Organization",
    "name": "JRNL",
    "url": "https://jrnl.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
            <body className={`${sans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
