import { ArticleHeader } from "components/articles/article-header";
import { Content } from "components/articles/content";
import { MobileContentTable } from "components/articles/contents-table";
import { DesktopContentsTable } from "components/articles/contents-table/desktop-contents";
import { getArticleFromSlug } from "queries/articles/articles";

export default async function ArticlePage() {
  const article = await getArticleFromSlug('introduction-to-container-queries')

  return (
    <main>
      <ArticleHeader title={article.title} date={article._createdAt} readTime={article.estimatedReadingTime} image={article.image} />
      <div className='container gap-5 mx-auto lg:px-4 lg:grid lg:grid-cols-article'>
        <div>
          <MobileContentTable />
          <Content content={article.content} />
        </div>
        <aside className='hidden lg:block'>
          <DesktopContentsTable />
        </aside>
      </div>
    </main>
  )
}