import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import RouteLoader from '@/components/RouteLoader'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Connoisseur - Luxury Fashion & Lifestyle',
  description: 'A global fashion brand specializing in fashion, home decor, interior design, styling, and exclusive collaborations.',
  keywords: ['luxury fashion', 'home decor', 'interior design', 'styling', 'fashion brand'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <RouteLoader />
          <div className="paint" aria-hidden="true" />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
