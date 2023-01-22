import { PortableTextBlock } from "@portabletext/types";
import { CodeBlock } from "./blocks/code";
import { PortableText } from "@portabletext/react";
import { articleSerializers } from "./blocks/article-componets";

interface Props {
  content: PortableTextBlock[]
}

export function Content({ content }: Props): JSX.Element {
  console.log(content)
  return (
    <article className='container mx-auto my-5 text-white lg:my-8'>
      <PortableText value={content} components={articleSerializers} />
      <h2 className='px-4 mb-2 text-3xl font-bold lg:px-0'>What are Container Queries?</h2>
      <img className='mb-4 lg:px-0' src='https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' loading='lazy' fetchpriority='low' width='1000' />
    </article>
  )
}