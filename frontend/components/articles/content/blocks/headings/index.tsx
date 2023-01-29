import { PortableTextBlockComponent } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { ReactElement } from "react";

interface HeadingProps {
  [key: string]: string;
}

const headingClasses: HeadingProps = {
  h1: '',
  h2: 'px-4 my-2 text-3xl font-bold lg:px-0',
  h3: 'px-4 my-2 text-2xl font-bold lg:px-0',
  h4: 'px-4 my-2 text-xl font-bold lg:px-0',
}

export const Heading2: PortableTextBlockComponent = function ({ children, value }) {
  const { style, _key } = value

  const HeadingTag = style as keyof JSX.IntrinsicElements
  const headingId = `h${_key}`;

  if (!HeadingTag) return null

  return (
    <HeadingTag id={headingId} className={headingClasses[HeadingTag]}>
      {children}
    </HeadingTag >
  )
}