import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface Props {
  articleHeaders: PortableTextBlock[]
}

export function DesktopContentsTable({ articleHeaders }: Props) {
  return (
    <div className='sticky px-4 my-5 text-white top-5 lg:my-8'>
      <h3 className='text-xl font-bold'>Table of Contents</h3>
      <nav>
        <PortableText value={articleHeaders} />
      </nav>
    </div>
  )
}