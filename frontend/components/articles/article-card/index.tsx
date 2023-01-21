import Link from "next/link";

export function ArticleCard() {
  return (
    <Link href={'/articles/content'} className='block py-4 not-last:border-b border-light'>
      <h3 className="mb-2 text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      <div className="flex gap-6 font-bold uppercase text-light">
        <p>January, 8th 2023</p>
        <p>5 mins read</p>
      </div>
      <p className='my-2 text-lg text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
    </Link>
  )
}