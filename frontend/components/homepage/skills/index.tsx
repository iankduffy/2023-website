import { PortableText } from '@portabletext/react'
import type {
  PortableTextBlock,
} from '@portabletext/types'
import { Skills } from './skill'

interface Props {
  title: string
  skills: string[]
  content: PortableTextBlock[]
  index: number
}

export function SkillsSection({ title = '', content = [], skills = [] }: Props): JSX.Element {
  return (
    <section className='container min-h-screen px-3 py-5 mx-auto' id='skills'>
      <h2 className='w-1/2 my-2 text-3xl font-bold text-white uppercase lg:text-5xl'>{title}</h2>
      <div className='lg:w-1/2 text-light'><PortableText value={content} /></div>
      <div className=''>
        <Skills skills={skills} />
      </div>
    </section>
  )
}