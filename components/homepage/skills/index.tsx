const skills: string[] = ['Web Performance', 'HTML', 'CSS', 'Javascript', 'React', 'NextJS', 'jQuery', 'SCSS', 'Ruby on Rails', 'NodeJS', 'TypeScript', 'Responsive Design', 'Accessibility', 'Test Driven Development', 'Cypress', 'Rspec']

// Could we add an effect that blurs other skills on hover of one item
// Maybe add sibling next to each other different from the rest. 
export function SkillsSection({ }) {
  return (
    <section className='container min-h-screen px-3 py-5 mx-auto' id='skills'>
      <h2 className='w-1/2 my-2 text-3xl font-bold text-white uppercase lg:text-5xl'>Skills and Technologies.</h2>
      <p className='lg:w-1/2 text-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul className='grid gap-2 my-5 text-4xl font-bold uppercase text-light lg:grid-cols-2'>
        {skills.map((skill, key) => {
          return (
            <li key={key} className='inline transition-colors hover:text-white'>
              <span className=''>{skill}.</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}