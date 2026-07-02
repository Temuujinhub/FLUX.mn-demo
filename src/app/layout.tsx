import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://flux.mn'),
  title: 'Flux Monitor — Шатахуун түгээх станцын хяналтын систем',
  description:
    'Үүлэн технологид суурилсан шатахуун түгээх станцын алсын удирдлага, хяналтын систем. Бодит цагийн мониторинг, борлуулалтын тайлан, үнийн удирдлага.',
  keywords: 'шатахуун, мониторинг, PTS, станц, Монгол, Flux Monitor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mn">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
