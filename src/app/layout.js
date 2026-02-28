import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Divyansh Arora | Social Media Marketing Strategist",
  description: "Divyansh Arora is a business student, Social Media Marketing Intern, and Financial Analyst leveraging data-driven content and generative AI to build high-impact digital experiences. Available for Summer & Fall '25.",
  keywords: "Divyansh Arora, Social Media Marketing, Marketing Strategist, AI Enthusiast, Financial Analyst, Amity University, Marketing Intern, Content Creation"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
