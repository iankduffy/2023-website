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
    <ul className='flex justify-center gap-10 uppercase border-b text-light border-light'>
      {links.map((link, key) => {
        return (
          <li className='font-bold transition-all hover:text-white hover:-translate-y-5'>
            <Link href={link.href} key={key} className="py-5">
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}