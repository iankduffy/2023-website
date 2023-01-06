import { ArticleHeader } from "components/articles/article-header";
import { ContentTable } from "components/articles/contents-table";

export default function ArticlePage() {
  return (
    <main>
      <ArticleHeader />
      <div>
        <ContentTable />
        {/* Article Here */}
      </div>
    </main>
  )
}