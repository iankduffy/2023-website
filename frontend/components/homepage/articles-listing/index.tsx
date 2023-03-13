import { ArticleListing } from "components/articles/article-listing"
import { getAllArticles } from "queries/articles/articles"

interface Props {
  title: string
}
export async function LatestArticles({title}: Props) {
  const articles = await getAllArticles()
  
  return (
  <section className="container mx-auto px-3 text-light my-48">
    <h2 className="my-2 text-3xl font-bold text-white uppercase lg:text-5xl">{title}</h2>
    <ArticleListing articles={articles} />
  </section>)
}