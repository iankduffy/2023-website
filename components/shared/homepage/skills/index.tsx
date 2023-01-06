const skills: string[] = ['Web Performance', 'HTML', 'CSS', 'Javascript', 'React', 'NextJS', 'jQuery', 'SCSS', 'Ruby on Rails', 'NodeJS', 'TypeScript', 'Responsive Design', 'Accessibility', 'Test Driven Development', 'Cypress', 'Rspec']


export function SkillsSection({ }) {
  return (
    <section className='container min-h-screen px-3 py-5 mx-auto'>
      <h2 className='w-1/2 my-2 text-3xl font-bold text-white uppercase lg:text-5xl'>Skills and Technologies.</h2>
      <p className='lg:w-1/2 text-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul className='gap-2 my-5 text-4xl font-bold uppercase text-light lg:grid lg:grid-cols-2'>
        {skills.map((skill, key) => {
          return (
            <li key={key}>
              {skill}.
            </li>
          )
        })}
      </ul>
    </section>
  )
}