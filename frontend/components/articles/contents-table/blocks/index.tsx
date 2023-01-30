'use client'
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

// Next13 App currently has a issue with linking to hash
// Once fix this will be disabled.
const NEXT_LINK_13_BROKEN = true
const ContentLink: PortableTextBlockComponent = function ({ value, children }) {
  const { style, _key } = value

  const headingId = `#h${_key}`

  if (NEXT_LINK_13_BROKEN) {
    return (
      <a href={headingId} className={headingClasses[style as string]}>{children}</a>
    )
  }

  return (
    <Link href={`${headingId}`} className={headingClasses[style as string]}>
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
  }
}