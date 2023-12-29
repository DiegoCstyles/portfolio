import { SpeedInsights } from "@vercel/speed-insights/next"
import './styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Providers from "./providers";

const montserrat = Montserrat({ subsets: ['latin'] }) // Initialize the Inter font with 'latin' subset

// Define metadata for the page
const metadata = {
  title: 'Diego Costa - Frontend Developer',
  description: 'Author: Diego Costa, Website: Frontend Developer Portfolio',
}

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <body className={montserrat.className}> 
          <Providers>{children}</Providers> 
        </body>
      </html>
    
  )
}

