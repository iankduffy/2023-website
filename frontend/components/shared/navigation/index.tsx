import Link from "next/link"
import { getNavigation } from "queries/layout/navigation"

const items = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Articles',
    href: '/articles'
  }
]


interface NavItem {
  _key: string
  _type: 'navItem'
  link: string
  text: string
}
interface MainNavigation {
  mainNavigation: NavItem[]
}

// @ts-expect-error
// Issue with server components
// Should be Promise<JSX.Element> | null 
// https://github.com/vercel/next.js/issues/43537
export async function Navigation(): any  {
  const { mainNavigation }: MainNavigation = await getNavigation()

  if (!mainNavigation.length) return null

  return (
    <>
      {/* Mobile Navigation */}
      <details className='lg:hidden'>
        <summary>Navigation</summary>
        <div className='absolute left-0 z-10 flex flex-col w-screen h-screen gap-4 px-3 py-5 text-white top-full bg-brandBackground'>
          {mainNavigation.map((item, key) => {
            return (
              <Link href={item.link} className='text-2xl font-bold text-white' key={key}>
                {item.text}
              </Link>
            )
          })}
        </div>
      </details>
      {/* Desktop Navigation */}
      <div className='justify-center hidden lg:flex'>
        {mainNavigation.map((item, key) => {
          return (
            <Link href={item.link} className='px-8 py-10 text-white transition duration-500 hover:bg-brandLight' key={key}>
              {item.text}
            </Link>
          )
        })}
      </div>
    </>
  )
}