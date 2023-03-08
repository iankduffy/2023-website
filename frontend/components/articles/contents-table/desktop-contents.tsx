'use client'
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { articleContentStore } from "stores/article-contents";
import { contentTableSerializers } from "./blocks";

interface Props {
  articleHeaders: PortableTextBlock[]
}

export function DesktopContentsTable({ articleHeaders }: Props) {
  const currentHeader = articleContentStore(e => e.currentHeader)
  console.log(currentHeader)
  return (
    <div className='sticky px-4 my-5 text-white top-5 lg:my-8'>
      <div>{currentHeader}</div>
      <h3 className='font-bold text-2xl'>Table of Contents</h3>
      <nav className='flex flex-col gap-2 my-4'>
        <PortableText value={articleHeaders} components={contentTableSerializers} />
      </nav>
    </div>
  )
}