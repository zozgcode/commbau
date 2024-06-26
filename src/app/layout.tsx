import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProtectedRoute from "../../ProtectedRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enjoy simple and secure online banking from Commonwealth Bank",
  description: "Enjoy simple and secure online banking from Commonwealth Bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen hidden md:flex items-center justify-center text-xl">
          <p>Kindly view this page on a mobile device. Thanks</p>
        </div>
        <ProtectedRoute>
          <div className="block md:hidden">{children}</div>
        </ProtectedRoute>
      </body>
    </html>
  );
}
