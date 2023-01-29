// Todo: Get good blue colour

import { PortableText } from "@portabletext/react";

export function MobileContentTable({ articleHeaders }) {
  return (
    <div className='container px-4 mx-auto my-5 lg:hidden'>
      <details className='p-2 text-white rounded bg-brandLight '>
        <summary className=''>Table of Contents</summary>
        <PortableText value={articleHeaders} />
      </details>
    </div>
  )
}