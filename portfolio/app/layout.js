import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Armina Parvaresh Rizi",
  description: "Armina's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
