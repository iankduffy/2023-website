import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
interface Props {
  articleHeaders: PortableTextBlock[]
}

export function MobileContentTable({ articleHeaders }: Props) {
  return (
    <div className='container px-4 mx-auto my-5 lg:hidden'>
      <details className='p-2 text-white rounded bg-brandLight '>
        <summary className=''>Table of Contents</summary>
        <PortableText value={articleHeaders} />
      </details>
    </div>
  )
}