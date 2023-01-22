import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import scss from 'refractor/lang/scss'
import typescript from 'refractor/lang/typescript'

Refractor.registerLanguage(js)
Refractor.registerLanguage(scss)
Refractor.registerLanguage(typescript)

interface Props {
  code: string
}

export function CodeBlock({ code }: Props) {
  console.log(code)
  return (
    <Refractor
      language={'scss'}
      value={code}
      className='p-3 mx-4 mb-4 overflow-x-scroll rounded bg-brandLight lg:mx-0'
    />
  )
}