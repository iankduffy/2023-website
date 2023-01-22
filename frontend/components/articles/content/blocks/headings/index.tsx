import { PortableTextBlock } from "@portabletext/types";
import { ReactElement } from "react";

interface Props {
  classNames: string
  node: PortableTextBlock
  children: JSX.Element
}

export function Heading({ node, children, classNames }: Props): JSX.Element | null {
  const { style, _key } = node

  const HeadingTag = style
  const headingId = `h${_key}`;

  if (!HeadingTag) return null

  return (
    <HeadingTag HeadingTag className={classNames} id={headingId} >
      {children}
    </HeadingTag >
  )
}