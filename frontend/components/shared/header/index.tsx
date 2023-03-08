import Link from "next/link";
import { getSiteSettings } from "queries/layout/siteSettings";
import { Navigation } from "../navigation";
import {FaLinkedin,FaGithub} from 'react-icons/fa'

// @ts-expect-error
// Issue with server components
// Should be Promise<JSX.Element> | null 
// https://github.com/vercel/next.js/issues/43537
export async function Header({ }): any {
  const {cv, linkedin, github} = await getSiteSettings()
  return (
    <header className='relative py-4'>
      <div className='container flex items-center justify-between gap-5 px-3 py-5 mx-auto text-white lg:py-0'>
        <nav className='w-1/5 lg:order-2 lg:w-full lg:text-center empty:hidden'><Navigation /></nav>
        <Link href='/' className='lg:w-1/5'>
          <img src="/logo.svg" width="50" height="55" alt="Ian Duffy Logo" loading="eager" fetchPriority="high" className='' />
        </Link>
        <div className="flex gap-2 lg:gap-5 text-large items-center">
          {linkedin && <Link href={linkedin} target='_blank' className='h-full py-2 text-2xl'><FaLinkedin /><span className='hidden'>Linkedin</span></Link>}
          {github && <Link href={github} target='_blank' className='h-full py-2 text-2xl'><FaGithub /><span className='hidden'>Github</span></Link>}
          <div className='w-1/5 text-center lg:order-3'>
            <Link href={cv} target='_blank' className='px-10 py-2 bg-[#223854] rounded hover:bg-[#21354F] transition duration-500'>CV</Link>
          </div>
        </div>
      </div>
    </header>
  )
}