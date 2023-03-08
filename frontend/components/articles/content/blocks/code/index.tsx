import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import scss from 'refractor/lang/scss'
import typescript from 'refractor/lang/typescript'

Refractor.registerLanguage(js)
Refractor.registerLanguage(scss)
Refractor.registerLanguage(typescript)

export interface CodeType {
  _key: string,
  _type: 'code'
  language: string
  code: string
}
interface Props {
  value: CodeType
}
 
export function CodeBlock({ value }: Props) {
  const { code, language } = value
  return (
    <Refractor
      language={language}
      value={code}
      className='p-3 mx-4 mb-4 overflow-x-scroll rounded bg-brandLight lg:mx-0'
    />
  )
}