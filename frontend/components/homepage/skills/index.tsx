import { PortableText } from '@portabletext/react'

export function SkillsSection({ title = '', content = [], skills = [] }): JSX.Element {
  return (
    <section className='container min-h-screen px-3 py-5 mx-auto' id='skills'>
      <h2 className='w-1/2 my-2 text-3xl font-bold text-white uppercase lg:text-5xl'>{title}</h2>
      <div className='lg:w-1/2 text-light'><PortableText value={content} /></div>
      <ul className='grid gap-2 my-5 text-4xl font-bold uppercase text-light t lg:grid-cols-2 sibling-hover:text-[#344256]'>
        {skills.map((skill, key) => {
          return (
            <li key={key} className=''>
              <span className='inline duration-700 cursor-default transition-color hover:text-white child'>{skill}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}