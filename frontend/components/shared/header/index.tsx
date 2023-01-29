import Link from "next/link";
import { Navigation } from "../navigation";

export function Header({ }): JSX.Element {
  return (
    <header className='relative py-4'>
      <div className='container flex items-center justify-between gap-5 px-3 py-5 mx-auto text-white lg:py-0'>
        <nav className='w-1/5 lg:order-2 lg:w-full lg:text-center empty:hidden'><Navigation /></nav>
        <Link href='/' className='lg:w-1/5'>
          <img src="/logo.svg" width="50" height="50" alt="Ian Duffy Logo" className='' />
        </Link>
        <div className='w-1/5 text-right lg:order-3'>
          <Link href='https://github.com/iankduffy' target='_blank' className='px-5 py-2 bg-[#223854] rounded-full hover:bg-[#21354F] transition'>Github</Link>
        </div>
      </div>
    </header>
  )
}