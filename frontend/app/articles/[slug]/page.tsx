import { ArticleHeader } from "components/articles/article-header";
import { Content } from "components/articles/content";
import { MobileContentTable } from "components/articles/contents-table";
import { DesktopContentsTable } from "components/articles/contents-table/desktop-contents";
import { getContentHeader } from "lib/article/getContentHeaders";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getArticleFromSlug } from "queries/articles/articles";

interface Props {
  slug: string
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug }: Props = params
  const article = await getArticleFromSlug(slug)
  const articleHeaders = await getContentHeader(article.content)

  return (
    <main className='scroll-smooth'>
      <ArticleHeader title={article.title} date={article._createdAt} readTime={article.estimatedReadingTime} image={article.image} />
      <div className='container gap-5 mx-auto lg:px-4 lg:grid lg:grid-cols-article'>
        <div>
          <MobileContentTable articleHeaders={articleHeaders} />
          <Content content={article.content} />
        </div>
        <aside className='hidden lg:block'>
          <DesktopContentsTable articleHeaders={articleHeaders} />
        </aside>
      </div>
    </main>
  )
}