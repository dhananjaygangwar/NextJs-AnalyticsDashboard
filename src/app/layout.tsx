import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Analytics Dashboard",
  description: "Demo dashboard with charts and KPIs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[color:var(--bg)] text-[color:var(--text)]`}>
        {children}
      </body>
    </html>
  );
}