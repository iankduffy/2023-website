import { Header } from 'components/shared/header'
import Script from 'next/script'
import 'styles/globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className='bg-brandBackground no-js '>
        <Header />
        {children}
      </body>
      <Script>{`document.querySelector('body').classList.remove('no-js')`}</Script>
    </html>
  )
}
