import { Header } from 'components/shared/header'
import Script from 'next/script'
import 'styles/globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-brandBackground no-js'>
        <Header />
        {children}
      </body>
      <Script>{`document.querySelector('body').classList.remove('no-js')`}</Script>
    </html>
  )
}
