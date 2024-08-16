import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const inter = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MVP - Products List'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-slate-100 antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}