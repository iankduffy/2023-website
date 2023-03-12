import { getSiteSettings } from "queries/layout/siteSettings";
import { HeroLinks } from "./links";

export interface Props {
  preheader: string
  mainheader: string
  paragraph: string
  index?: number
}

// @ts-expect-error
// Issue with server components
// Should be Promise<JSX.Element> | null 
// https://github.com/vercel/next.js/issues/43537
export async function Hero({ preheader = '', mainheader = '', paragraph = '' }: Props): any {
  const { cv } = await getSiteSettings()
  return (
    <section className='container relative flex flex-col justify-between h-screen px-3 pt-20 mx-auto'>
      <div className="relative z-10">
        <p className='text-2xl font-bold uppercase text-light lg:text-4xl'>{preheader}</p>
        <h1 className='my-2 text-6xl font-bold text-white uppercase lg:text-8xl'>
          {mainheader}
        </h1>
        <p className='max-w-xl pr-6 text-light lg:text-lg'>{paragraph}</p>
        <div className="flex gap-3 item-center my-5">
          <a className='button py-2 px-4' href='mailto:i.duffy7999@gmail.com' target='_blank'>Contact Me</a>
          <a className='button secondary py-2 px-5' href={cv} target='_blank'>Download CV</a>
        </div>
      </div>
      {/* <HeroLinks /> */}
      <ul className='hidden lg:block absolute top-1/2 right-0 font-bold text-right text-8xl text-brandBackground text-outline font-["arial"] rotate-[10deg] -translate-y-1/2'>
        <li>Javascript</li>
        <li>SCSS - CSS</li>
        <li>React - NextJS</li>
        <li>Web Performance</li>
      </ul>
    </section>
  )
}