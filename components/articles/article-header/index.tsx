const title = 'Container Queries'
const date = 'January, 8th 2023'
const readTime = '5 mins read'
const image = ''


export function ArticleHeader() {
  return (
    <section className='container mx-auto my-10'>
      <div className='px-4'>
        <h1 className='mb-3 text-5xl font-bold text-white uppercase'>{title}</h1>
        <div className='flex justify-between font-bold uppercase text-light'>
          <p>{date}</p>
          <p>{readTime}</p>
        </div>
      </div>
      {/* Image Goes Here */}
    </section>
  )
}