import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600','700'] })

export const metadata: Metadata = {
  title: 'GreatGamer Home',
  description: 'This is Homepage of GreatGamer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= {poppins.className}>{children}</body>
    </html>
  )
}
