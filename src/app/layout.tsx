import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import { ThemeProvider } from "@/providers/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Topics to learn",
    description: "Created by Raazi Muhammed",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <NavBar />
                    {children}
                    <Footer />
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
