import { PortableTextBlockComponent } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { ReactElement } from "react";

interface Props {
  classNames: string
  node: PortableTextBlock
  children: JSX.Element
}

export function Heading({ node, children, classNames }: Props) {
  const { style, _key } = node

  const HeadingTag = style
  const headingId = `h${_key}`;

  if (!HeadingTag) return null

  return (
    <HeadingTag id={headingId} className={classNames} >
      {children}
    </HeadingTag >
  )
}