import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Nebulus",
    default: "Nebulus",
  },
  metadataBase: new URL("https://www.nebulus.in"),
  referrer: "origin-when-cross-origin",
  keywords: ["Nebulus", "AI", "generated", "automatic", "optimization", "SEO"],
  authors: [{ name: "Arnav Gupta", url: "https://www.arnavgupta.net" }],
  creator: "Arnav Gupta",
  publisher: "Arnav Gupta",
  description: "Unleashing Innovation with Nebulus AI.",
  openGraph: {
    title: "Nebulus",
    description: "Unleashing Innovation with Nebulus AI.",
    url: "https://www.nebulus.in",
    siteName: "Nebulus",
    images: [
      {
        url: "/assets/logo-rectangle-1200x630.png",
        width: 1200,
        height: 630,
        alt: "This is a large N with a spacy image inside it, the logo of nebulus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nebulus",
    description: "Unleashing Innovation with Nebulus AI.",
    // siteId: "",
    // creator: "",
    // creatorId: "",
    images: ["/assets/logo-rectangle-180x180.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
