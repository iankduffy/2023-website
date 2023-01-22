import { ArticleCard } from "components/articles/article-card"
import { ArticleListing } from "components/articles/article-listing"
import { getAllArticles } from "queries/articles/articles"

const SEARCH_ACTIVE = false

export default async function ArticlePage() {
  const articles = await getAllArticles()

  return (
    <main className="container px-3 mx-auto mt-20 text-white">
      <h1 className='text-5xl font-bold'>Articles.</h1>
      <p className="mt-2 lg:max-w-3xl">Dolore laborum consequat aliquip voluptate. Minim aliquip nisi ex adipisicing voluptate laboris ad nostrud incididunt amet aliquip nisi veniam. Duis dolor consectetur amet aute et officia Lorem anim deserunt adipisicing sunt irure. Duis officia est proident excepteur nulla fugiat laborum.</p>
      {SEARCH_ACTIVE && <div>
        <input type='text' placeholder='Search Articles' className='w-full max-w-lg px-4 py-3 my-4 rounded bg-brandLight' />
      </div>}
      <ArticleListing articles={articles} />
    </main>
  )
}