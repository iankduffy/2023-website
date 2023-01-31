import { Heading2 } from "./headings";
import dynamic from "next/dynamic";
import { Code } from "./code";
import { PortableTextComponents } from "@portabletext/react";
import { Picture } from "./picture";
import { ArticleVideo } from "./articleVideo";

const CodeBlock = dynamic(() =>
  import(`./code`).then((mod) => mod.CodeBlock))

const ArticleVideoBlock = dynamic(() => import('./articleVideo').then((mod) => mod.ArticleVideo))

// Todo: Find correct types for this
export const articleSerializers: PortableTextComponents | undefined = {
  block: {
    h1: Heading2,
    h2: Heading2,
    h3: Heading2,
    h4: Heading2,
    h5: Heading2,
    h6: Heading2,
    normal: ({ value, children }) => (
      <p className="px-4 mb-4 lg:px-0">{children}</p>
    )
  },
  types: {
    code: ({ value }: { value: Code }) => {
      return (
        <CodeBlock value={value} />
      )
    },
    picture: Picture,
    articleVideo: ArticleVideoBlock
  }
}