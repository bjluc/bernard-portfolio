'use client'

import './globals.css'
import { Sora } from 'next/font/google'



// framer motion
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

// components
import Nav from "./components/Nav"
import Header from "./components/Header"
import TopLeftImg from "./components/TopLeftImg"
import Transition from "./components/Transition"


export default function RootLayout({ children }) {
  const router = useRouter()
  return (
    <html lang='en'>
      <body>
  <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
        <div
          className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
        >
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
          
        </div>
        </motion.div>
      </AnimatePresence>
      </body>
    </html>
  )
}
