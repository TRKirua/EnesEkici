import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EnesEkici',
  description: 'Created by Enes Ekici',
  generator: 'enes.ekici',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
