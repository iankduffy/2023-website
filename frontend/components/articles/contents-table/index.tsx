'use client'
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { contentTableSerializers } from "./blocks";
interface Props {
  articleHeaders: PortableTextBlock[]
}

export function MobileContentTable({ articleHeaders }: Props) {
  return (
    <div className='container mx-auto my-5 lg:hidden sticky top-0'>
      <details className='py-2 px-4 text-white bg-brandLight cursor-pointer'>
        <summary className='text-xl font-bold'>Table of Contents</summary>
        <div className='flex flex-col gap-1 mt-2'>
          <PortableText value={articleHeaders} components={contentTableSerializers} />
        </div>
      </details>
    </div>
  )
}