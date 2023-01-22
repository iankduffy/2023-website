import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { urlFor } from "lib/sanity"

interface Props {
  title: string
  date: string
  readTime: number
  image: SanityImageSource
}

// Todo: srcset on images, get dimensions
// Do we want a hero image ?
export function ArticleHeader({ title, date, readTime, image }: Props) {
  const publishedDate = new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
  const url = urlFor(image).fit('fill').width(1248).height(700).quality(80).auto('format').url()
  return (
    <section className='container mx-auto mt-10'>
      <div className='px-4 mb-4'>
        <h1 className='mb-3 text-3xl font-bold text-white uppercase lg:text-5xl'>{title}</h1>
        <div className='flex gap-6 font-bold uppercase text-light'>
          <p>{publishedDate}</p>
          <p>{readTime} mins read</p>
        </div>
      </div>
      <img className='mx-auto overflow-hidden lg:rounded-lg lg:px-4 lg:container' src={url} width={1790} height={1167} loading={'eager'} fetchpriority='high' />
    </section>
  )
}