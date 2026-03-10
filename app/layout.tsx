import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Ayumetra',
  description: 'A smart wellness companion designed for your mind and emotions. Personalized insights, guided support, and intelligent tools to help you find balance every day.',
  icons: {
    icon: [
      {
        url: '/app-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/app-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/app-icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/app-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
