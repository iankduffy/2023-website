const skills: string[] = ['Web Performance', 'HTML', 'CSS', 'Javascript', 'React', 'NextJS', 'jQuery', 'SCSS', 'Ruby on Rails', 'NodeJS', 'TypeScript', 'Responsive Design', 'Accessibility', 'Test Driven Development', 'Cypress', 'Rspec']

// Could we add an effect that blurs other skills on hover of one item
// Maybe add sibling next to each other different from the rest. 
export function SkillsSection({ }) {
  return (
    <section className='container min-h-screen px-3 py-5 mx-auto' id='skills'>
      <h2 className='w-1/2 my-2 text-3xl font-bold text-white uppercase lg:text-5xl'>Skills and Technologies.</h2>
      <p className='lg:w-1/2 text-light '>This is a list of the technologies and skills I often use and have experience with:</p>
      <ul className='grid gap-2 my-5 text-4xl font-bold uppercase text-light t lg:grid-cols-2 sibling-hover:text-[#344256]'>
        {skills.map((skill, key) => {
          return (
            <li key={key} className=''>
              <span className='inline duration-700 cursor-default transition-color hover:text-white child'>{skill}.</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}