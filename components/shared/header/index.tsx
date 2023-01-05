
// Question: Could this be better in Grid
export function Header({}): JSX.Element {
  return (
    <header>
      <div className='container mx-auto flex items-center justify-between px-3 py-5 text-white gap-5'>
        <nav className='w-1/5 lg:order-2 lg:w-full lg:text-center'>Navigation</nav>
        <div className='lg:w-1/5'>
          <img src="/logo.svg" width="50" height="50" alt="Ian Duffy Logo" className=''/>
        </div>
        <div className='w-1/5 lg:order-3 text-right'>Socials / Github</div>
      </div>
    </header>
  )
}