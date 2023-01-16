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
        <div className='absolute left-0 z-10 w-screen h-screen px-3 py-5 text-white top-full bg-brandBackground'>
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
      <div className='justify-center hidden gap-4 lg:flex'>
        {items.map((item, key) => {
          return (
            <Link href={item.href} className='p-5 text-white border-b' key={key}>
              {item.label}
            </Link>
          )
        })}
      </div>
    </>
  )
}