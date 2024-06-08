import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
  description:
    "Nebulus: Your AI-powered innovation partner. Explore how Nebulus leverages advanced artificial intelligence to drive transformative change across industries, unlocking limitless possibilities and driving growth.",
  openGraph: {
    title: "Nebulus",
    description:
      "Nebulus: Your AI-powered innovation partner. Explore how Nebulus leverages advanced artificial intelligence to drive transformative change across industries, unlocking limitless possibilities and driving growth.",
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
    description:
      "Nebulus: Your AI-powered innovation partner. Explore how Nebulus leverages advanced artificial intelligence to drive transformative change across industries, unlocking limitless possibilities and driving growth.",
    // siteId: "",
    // creator: "",
    // creatorId: "",
    images: ["/assets/logo-rectangle-180x180.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
