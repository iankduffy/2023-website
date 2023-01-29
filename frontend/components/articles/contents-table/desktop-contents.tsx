import { PortableText } from "@portabletext/react";

export function DesktopContentsTable({ articleHeaders }) {
  return (
    <div className='sticky px-4 my-5 text-white top-5 lg:my-8'>
      <h3 className='text-xl font-bold'>Table of Contents</h3>
      <nav>
        <PortableText value={articleHeaders} />
      </nav>
    </div>
  )
}