import { Navigation } from "../navigation";

// Question: Could this be better in Grid
export function Header({ }): JSX.Element {
  return (
    <header className='relative'>
      <div className='container flex items-center justify-between gap-5 px-3 py-5 mx-auto text-white'>
        <nav className='w-1/5 lg:order-2 lg:w-full lg:text-center'><Navigation /></nav>
        <div className='lg:w-1/5'>
          <img src="/logo.svg" width="50" height="50" alt="Ian Duffy Logo" className='' />
        </div>
        <div className='w-1/5 text-right lg:order-3'>Socials / Github</div>
      </div>
    </header>
  )
}