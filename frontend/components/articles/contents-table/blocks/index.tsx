import { PortableTextBlockComponent, PortableTextComponents } from "@portabletext/react"
import Link from 'next/link'

interface HeadingClasses {
  [key: string]: string;
}

const headingClasses: HeadingClasses = {
  h1: '',
  h2: 'block text-light hover:text-white cursor-pointer text-lg',
  h3: 'block text-light hover:text-white cursor-pointer ml-2 text-lg',
  h4: 'block text-light hover:text-white cursor-pointer ml-4 text-lg',
}


const ContentLink: PortableTextBlockComponent = function ({ value, children }) {
  const { style, _key } = value

  const headingId = `h${_key}`

  return (
    <Link href={`#${headingId}`} className={headingClasses[style as string]}>
      {children}
    </Link>
  )
}

export const contentTableSerializers: PortableTextComponents | undefined = {
  block: {
    h1: ContentLink,
    h2: ContentLink,
    h3: ContentLink,
    h4: ContentLink,
    h5: ContentLink,
    h6: ContentLink,
    // normal: ({ value, children }) => (
    //   <p className="px-4 mb-4 lg:px-0">{children}</p>
    // )
  }
}