import { ArticleHeader } from "components/articles/article-header";
import { Content } from "components/articles/content";
import { MobileContentTable } from "components/articles/contents-table";
import { DesktopContentsTable } from "components/articles/contents-table/desktop-contents";

export default function ArticlePage() {
  return (
    <main>
      <ArticleHeader />
      <div className='container gap-5 mx-auto lg:px-4 lg:grid lg:grid-cols-article'>
        <div>
          <MobileContentTable />
          <Content />
        </div>
        <aside className='hidden lg:block'>
          <DesktopContentsTable />
        </aside>
      </div>
    </main>
  )
}