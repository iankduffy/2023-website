import { Header } from 'components/shared/header'
import 'styles/globals.scss'

// Todo: change BG-class to tailwind class
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
      <body className='bg-[#152233] '>
        <Header />
        {children}
      </body>
    </html>
  )
}
