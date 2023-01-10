const title = 'Container Queries'
const date = 'January, 8th 2023'
const readTime = '5 mins read'
const image = ''


export function ArticleHeader() {
  return (
    <section className='container mx-auto mt-10'>
      <div className='px-4 mb-4'>
        <h1 className='mb-3 text-3xl font-bold text-white uppercase lg:text-5xl'>{title}</h1>
        <div className='flex gap-6 font-bold uppercase text-light'>
          <p>{date}</p>
          <p>{readTime}</p>
        </div>
      </div>
      <img className='mx-auto overflow-hidden lg:rounded-lg lg:px-4 lg:container' src={'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1790&q=80'} width={1790} loading={'eager'} fetchpriority='high' />
    </section>
  )
}