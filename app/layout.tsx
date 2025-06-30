import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "kaafcard",
  description: "Created with Kareem",
  generator: "kareem.dev",
};

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
