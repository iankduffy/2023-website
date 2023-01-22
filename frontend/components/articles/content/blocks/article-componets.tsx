import { Heading } from "./headings";
import dynamic from "next/dynamic";
const CodeBlock = dynamic(() =>
  import(`./code`).then((mod) => mod.CodeBlock))

export const articleSerializers = {
  block: {
    h1: (props) => <Heading {...props} classNames='px-4 mb-2 text-3xl font-bold lg:px-0' />,
    h2: (props) => <Heading {...props} classNames='px-4 mb-2 text-3xl font-bold lg:px-0' />,
    h3: (props) => <Heading {...props} classNames='px-4 mb-2 text-2xl font-bold lg:px-0' />,
    h4: (props) => <Heading {...props} classNames='px-4 mb-2 text-xl font-bold lg:px-0' />,
    h5: (props) => <Heading {...props} classNames='px-4 mb-2 text-xl font-bold lg:px-0' />,
    h6: (props) => <Heading {...props} classNames='px-4 mb-2 text-xl font-bold lg:px-0' />,
    normal: ({ children }) => <p className="px-4 mb-4 lg:px-0">{children}</p>,
  },
  types: {
    code: ({ code }) => <CodeBlock code={code} />
  }
}