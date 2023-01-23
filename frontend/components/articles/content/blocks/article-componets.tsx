import { PortableTextBlock, ArbitraryTypedObject } from "@portabletext/types";
import { Heading } from "./headings";
import dynamic from "next/dynamic";
import { Code } from "./code";
import { PortableTextBlockComponent, PortableTextComponents } from "@portabletext/react";

const CodeBlock = dynamic(() =>
  import(`./code`).then((mod) => mod.CodeBlock))

interface Headers {
  node: PortableTextBlock
  children: JSX.Element
}

// Todo: Find correct types for this
export const articleSerializers: unknown = {
  block: {
    h1: ({ node, children }: Headers) => <Heading node={node} children={children} classNames='px-4 mb-2 text-3xl font-bold lg:px-0' />,
    h2: ({ node, children }: Headers) => <Heading node={node} children={children} classNames='px-4 mb-2 text-3xl font-bold lg:px-0' />,
    h3: ({ node, children }: Headers) => <Heading node={node} children={children} classNames='px-4 mb-2 text-2xl font-bold lg:px-0' />,
    h4: ({ node, children }: Headers) => <Heading node={node} children={children} classNames='px-4 mb-2 text-xl font-bold lg:px-0' />,
    h5: ({ node, children }: Headers) => <Heading node={node} children={children} classNames='px-4 mb-2 text-xl font-bold lg:px-0' />,
    h6: ({ node, children }: Headers) => <Heading node={node} children={children} classNames='px-4 mb-2 text-xl font-bold lg:px-0' />,
    normal: ({ children }: { children: JSX.Element }) => {
      return (
        <p className="px-4 mb-4 lg:px-0">{children}</p>)
    },
  },
  types: {
    code: ({ value }: { value: Code }) => {
      return (
        <CodeBlock value={value} />
      )
    }
  }
}