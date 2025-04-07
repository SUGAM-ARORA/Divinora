import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTranslateWidget } from "@/components/GoogleTranslateWidget";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Divinora - Divine Wisdom & Spiritual Knowledge',
  description: 'Explore divine wisdom, sacred texts, and spiritual teachings from Hindu traditions and world religions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Top Nav */}
          <nav className="flex gap-4 p-4 bg-gray-100 border-b">
            <a href="/" className="text-sm text-gray-800 hover:underline">Home</a>
            <a href="/mantra" className="text-sm text-gray-800 hover:underline">Mantras</a>
          </nav>

          {/* Google Translate & Page Content */}
          <GoogleTranslateWidget />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
