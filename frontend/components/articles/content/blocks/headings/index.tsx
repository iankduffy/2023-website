import { PortableTextBlockComponent } from "@portabletext/react";
import Link from "next/link";
import { HeadingElement } from "./heading";

interface HeadingProps {
  [key: string]: string;
}

const headingClasses: HeadingProps = {
  h1: '',
  h2: 'px-4 my-2 text-3xl font-bold lg:px-0 scroll-mt-12 scroll-smooth',
  h3: 'px-4 my-2 text-2xl font-bold lg:px-0 scroll-mt-12',
  h4: 'px-4 my-2 text-xl font-bold lg:px-0 scroll-mt-12',
}

// Next13 App currently has a issue with linking to hash
// Once fix this will be disabled.
const NEXT_LINK_13_BROKEN = true
export const Heading2: PortableTextBlockComponent = function ({ children, value }) {
  const { style, _key } = value

  const HeadingTag = style as keyof JSX.IntrinsicElements
  const headingId = `h${_key}`;

  if (!HeadingTag) return null

  if (NEXT_LINK_13_BROKEN) {
    return (
      <a href={`#${headingId}`}>
        <HeadingElement HeadingTag={HeadingTag} classNames={headingClasses[HeadingTag]} headingId={headingId} > 
          {children}
        </HeadingElement >
      </a>
    )
  }

  return (
    <Link href={`#${headingId}`} shallow={true} scroll={true} id={headingId}>
      <HeadingTag className={headingClasses[HeadingTag]}>
        {children}
      </HeadingTag>
    </Link>
  )
}