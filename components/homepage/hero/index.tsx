import { HeroLinks } from "./links";

export function Hero({ }) {
  return (
    <section className='container h-screen px-3 pt-20 mx-auto'>
      <div>
        <p className='text-2xl font-bold uppercase text-light lg:text-4xl'>Hello I am Ian Duffy</p>
        <h1 className='my-2 text-6xl font-bold text-white uppercase lg:text-8xl'>
          Web Developer.
        </h1>
        <p className='max-w-xl pr-6 text-light lg:text-lg'>Living in Newcastle upon Tyne, UK. Specialising in Web Performance, Nextjs, modern CSS/SCSS, with experience building e-commerce sites and using React, NodeJs and Ruby on Rails. </p>
      </div>
      <HeroLinks />
    </section>
  )
}