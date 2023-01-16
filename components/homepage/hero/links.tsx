import Link from "next/link"

const links = [
  {
    label: 'SKILLS AND TECHNOLOGIES',
    href: '#skills'
  },
  {
    label: 'About Me',
    href: '#about'
  }
]


export function HeroLinks(): JSX.Element | null {

  if (!links.length) return null

  return (
    <ul className='flex justify-center gap-10 py-5 uppercase border-b text-light border-light'>
      {links.map((link, key) => {
        return (
          <li className='font-bold transition-colors hover:text-white'>
            <Link href={link.href} key={key}>
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}