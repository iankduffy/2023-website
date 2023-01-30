import { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { articleSerializers } from "./blocks/article-componets";

interface Props {
  content: PortableTextBlock[]
}

export function Content({ content }: Props): JSX.Element {
  return (
    <article className='container mx-auto my-5 text-white lg:my-8'>
      <PortableText value={content} components={articleSerializers} />
    </article>
  )
}