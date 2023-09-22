import './globals.css'
import { Inter } from 'next/font/google'
import Atm from './atm/page'
import classes from './page.module.sass'
import { GlobalContextProvider } from './Context/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <main className={classes.main}>{children}</main>
        </GlobalContextProvider>
        
      </body>
    </html>
  )
}