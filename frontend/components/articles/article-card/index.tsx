import Link from "next/link";
import { Slug } from "types/sanity";

interface Props {
  title: string
  description: string
  slug: Slug
  _createdAt: string
  estimatedReadingTime: number | null
}

export function ArticleCard({ title, description = '', slug, publishedDate, estimatedReadingTime }: Props) {
  const date = new Date(publishedDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <Link href={`/articles/${slug.current}`} className='block py-4 not-last:border-b border-light'>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <div className="flex gap-6 font-bold uppercase text-light">
        <p>{date}</p>
        <p>{estimatedReadingTime} mins read</p>
      </div>
      <p className='my-2 text-lg text-light'>{description}</p>
    </Link>
  )
}