import type { Metadata } from 'next'
import { Playfair_Display, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"] });
const _geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'mmmdecors - Memorable Magical Moments',
  description: 'Refined event design and planning for weddings, corporate events, and celebrations',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
