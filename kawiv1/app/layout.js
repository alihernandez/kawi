import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GooglePublisherTag from './googletag'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kawi Services LLC',
  description: 'Site created by MtnPixels.dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Navbar />
         {children}
         <GooglePublisherTag />
         <Footer />
         </body>
    </html>
  )
}
