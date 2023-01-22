import Link from "next/link";
import { Slug } from "types/sanity";

interface Props {
  title: string
  description: string
  slug: Slug
  _createdAt: string
  estimatedReadingTime: number | null
}

export function ArticleCard({ title, description = '', slug, _createdAt, estimatedReadingTime }: Props) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const publishedDate = new Date(_createdAt).toLocaleDateString('en-GB', options)

  console.log(slug)
  return (
    <Link href={`/articles/${slug.current}`} className='block py-4 not-last:border-b border-light'>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <div className="flex gap-6 font-bold uppercase text-light">
        <p>{publishedDate}</p>
        <p>{estimatedReadingTime} mins read</p>
      </div>
      <p className='my-2 text-lg text-light'>{description}</p>
    </Link>
  )
}