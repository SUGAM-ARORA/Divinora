import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTranslateWidget } from "@/components/GoogleTranslateWidget";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Divinora - Divine Wisdom & Spiritual Knowledge',
  description: 'Explore divine wisdom, sacred texts, and spiritual teachings from Hindu traditions and world religions.',
  keywords: 'spirituality, religion, meditation, hinduism, christianity, islam, buddhism, sikhism, judaism, prayer, wisdom',
  authors: [{ name: 'Divinora Team' }],
  creator: 'Divinora',
  publisher: 'Divinora',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://divinora.com'),
  openGraph: {
    title: 'Divinora - Divine Wisdom & Spiritual Knowledge',
    description: 'Explore divine wisdom, sacred texts, and spiritual teachings from all world religions.',
    url: 'https://divinora.com',
    siteName: 'Divinora',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divinora - Divine Wisdom & Spiritual Knowledge',
    description: 'Explore divine wisdom, sacred texts, and spiritual teachings from all world religions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <GoogleTranslateWidget />
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}