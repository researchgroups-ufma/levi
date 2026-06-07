import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={siteConfig.theme.googleFontsUrl} rel="stylesheet" />
      </head>
      <body className="bg-canvas text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
