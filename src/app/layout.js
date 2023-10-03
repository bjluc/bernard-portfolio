import './globals.css'
import { Sora } from '@next/font/google'

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

// components
import Nav from '@/app/components/Nav'
import Header from '@/app/components/Header'
import TopLeftImg from '@/app/components/TopLeftImg'

export const metadata = {
  title: 'Bernard Porfolio',
  description: 'Bernard Porfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div
          className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
        >
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
