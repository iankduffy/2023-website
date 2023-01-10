import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import scss from 'refractor/lang/scss'
import typescript from 'refractor/lang/typescript'

Refractor.registerLanguage(js)
Refractor.registerLanguage(scss)
Refractor.registerLanguage(typescript)

const code = `@container article(maxwidth: 500px) {
  background: blue; 
}`

export function CodeBlock() {
  return (
    <Refractor
      language={'scss'}
      value={code}
      className='p-3 mx-4 mb-4 overflow-x-scroll bg-blue-800 rounded lg:mx-0'
    />
  )
}