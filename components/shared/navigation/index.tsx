import Link from "next/link"

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

export function Navigation() {
  return (
    <>
      {/* Mobile Navigation */}
      <details className='lg:hidden'>
        <summary>Navigation</summary>
        <div className='absolute left-0 z-10 flex flex-col w-screen h-screen gap-4 px-3 py-5 text-white top-full bg-brandBackground'>
          {items.map((item, key) => {
            return (
              <Link href={item.href} className='text-2xl font-bold text-white' key={key}>
                {item.label}
              </Link>
            )
          })}
        </div>
      </details>
      {/* Desktop Navigation */}
      <div className='justify-center hidden lg:flex'>
        {items.map((item, key) => {
          return (
            <Link href={item.href} className='px-8 py-10 text-white transition duration-500 hover:bg-brandLight' key={key}>
              {item.label}
            </Link>
          )
        })}
      </div>
    </>
  )
}