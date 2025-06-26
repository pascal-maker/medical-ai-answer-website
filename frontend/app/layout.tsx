import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medical AI - Exam Preparation Platform',
  description: 'Modern platform for medical entrance exam preparation with adaptive learning and detailed explanations.',
  keywords: 'medical exam, entrance exam, VUB, medicine, dentistry, veterinary, practice questions',
  authors: [{ name: 'Medical AI Team' }],
  openGraph: {
    title: 'Medical AI - Exam Preparation Platform',
    description: 'Prepare for medical entrance exams with our adaptive learning platform',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 