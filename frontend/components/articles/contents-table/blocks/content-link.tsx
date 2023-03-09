'use client'
import { PortableTextBlockComponent } from "@portabletext/react";
import Link from "next/link";
import { articleContentStore } from "stores/article-contents";

interface HeadingClasses {
  [key: string]: string;
}

const headingClasses: HeadingClasses = {
  h1: '',
  h2: 'block text-light hover:text-white cursor-pointer text-lg duration-300',
  h3: 'block text-light hover:text-white cursor-pointer ml-2 text-lg duration-300',
  h4: 'block text-light hover:text-white cursor-pointer ml-4 text-lg duration-300',
}

// Next13 App currently has a issue with linking to hash
// Once fix this will be disabled.
const NEXT_LINK_13_BROKEN = true
export const ContentLink: PortableTextBlockComponent = function ({ value, children }) {
  const currentHeader = articleContentStore((state) => state.currentHeader)
  const { style, _key } = value

  const isCurrent = currentHeader === `h${_key}`

  const headingId = `#h${_key}`

  if (NEXT_LINK_13_BROKEN) {
    return (
      <a href={headingId} className={headingClasses[style as string]} style={{ 'color': isCurrent ? 'white' : ''}}>{children}</a>
    )
  }

  return (
    <Link href={`${headingId}`} className={headingClasses[style as string]}>
      {children}
    </Link>
  )
}