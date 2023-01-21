import { HeroLinks } from "./links";

// Todo: Get h-screen to ignore the header
export function Hero({ }) {
  return (
    <section className='container relative flex flex-col justify-between h-screen px-3 pt-20 mx-auto'>
      <div className="relative z-10">
        <p className='text-2xl font-bold uppercase text-light lg:text-4xl'>Hello I am Ian Duffy</p>
        <h1 className='my-2 text-6xl font-bold text-white uppercase lg:text-8xl'>
          Web Developer.
        </h1>
        <p className='max-w-xl pr-6 text-light lg:text-lg'>Living in Newcastle upon Tyne, UK. Specialising in Web Performance, Nextjs, modern CSS/SCSS, with experience building e-commerce sites and using React, NodeJs and Ruby on Rails. </p>
      </div>
      {/* <HeroLinks /> */}
      <ul className='hidden lg:block absolute top-1/2 right-0 font-bold text-right text-8xl text-brandBackground text-outline font-["arial"] rotate-[10deg] -translate-y-1/2'>
        <li>Javascript</li>
        <li>CSS</li>
        <li>React - NextJS</li>
        <li>Web Performance</li>
      </ul>
    </section>
  )
}