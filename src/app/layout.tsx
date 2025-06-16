import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PriceContextProvider from "../library/context/PriceContextProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hindsol Software– Smart IT Solutions, Web Development & Digital Growth Partner",
  description: "Hindsol Software is a trusted IT company delivering innovative web development, software solutions, mobile apps, and digital growth strategies tailored for startups, enterprises, and MSMEs across India. Let's build your digital future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Fixed horizontal div */}
        <div className="fixedSidebar">
          {/* Links to social media platforms */}
          <a href="https://www.facebook.com/hindsolsoftware/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook.png" />
          </a>
          <a href="https://www.instagram.com/hindsolsoftware/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram.png" />
          </a>
          <a href="https://www.whatsapp.com/hindsol" target="_blank" rel="noopener noreferrer">
          <img src="/assets/whatsapp.png" />
          </a>
          {/* Add more social media links/icons as needed */}
        </div>
        {/* Main content */}
        <PriceContextProvider>
        {children}
        </PriceContextProvider>
      </body>
    </html>
  );
}
