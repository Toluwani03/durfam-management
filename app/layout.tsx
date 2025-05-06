'use client'

import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { MainNav } from '@/components/main-nav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <div className="border-b border-green-100">
            <div className="flex h-16 items-center px-4">
              <MainNav />
            </div>
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
