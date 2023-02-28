import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return <div style={font.style}>
    <Navbar />
    <Component {...pageProps} />
  </div>
}
