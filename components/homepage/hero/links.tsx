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
    <ul>
      {links.map((link, key) => {
        return (
          <li>
            <Link href={link.href} key={key}>
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}