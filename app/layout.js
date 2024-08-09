import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AD AI",
  description: "Generate Ads with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen overflow-x-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
