import { Slug } from "types/sanity";
import { ArticleCard } from "../article-card";
import { PortableTextBlock } from "@portabletext/types";

// Move Article Type to own file
interface Article {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updated: string
  description: string
  slug: Slug
  title: string
  estimatedReadingTime: number | null
  content: PortableTextBlock[]
}

interface Props {
  articles: Article[]
}

export function ArticleListing({ articles }: Props) {

  if (!articles.length) {
    return (
      <section className="max-w-4xl mt-10">
        <h2 className="text-2xl text-bold">No articles found</h2>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mt-10">
      {articles.map((article) => {
        return (
          <ArticleCard key={article._id} {...article} />
        )
      })}
    </section>)
}