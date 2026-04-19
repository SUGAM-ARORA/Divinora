import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTranslateWidget } from "@/components/GoogleTranslateWidget";
import { AudioProvider } from "@/components/audio-provider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Divinora — Sacred Pilgrimages, Temples & Spiritual Journeys of India',
  description: 'Your complete guide to Indian pilgrimages — Char Dham, 12 Jyotirlingas, 52 Shakti Peethas, sacred treks, temple guides, and route planning. Explore Divine India.',
  keywords: 'Char Dham, Jyotirlinga, Shakti Peetha, Indian pilgrimage, sacred trek, Vaishno Devi, Kedarnath, temples, spiritual tourism',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AudioProvider>
            <GoogleTranslateWidget />
            {children}
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}