import type { SanityDocument } from "@sanity/client";
import { ArticleHeader } from "components/articles/article-header";
import { Content } from "components/articles/content";
import { MobileContentTable } from "components/articles/contents-table";
import { DesktopContentsTable } from "components/articles/contents-table/desktop-contents";
import { getContentHeader } from "lib/article/getContentHeaders";
import { urlFor } from "lib/sanity";
import { getAllArticles, getArticleFromSlug } from "queries/articles/articles";

interface Props {
  slug: string
}

export async function generateStaticParams() {
  const posts = await getAllArticles()

  const slug = posts.map((post: SanityDocument) => ({
    slug: post.slug.current,
  }));

  return slug
}

export async function generateMetadata({ params }: { params: Props }) { 
  const article = await getArticleFromSlug(params.slug)
  const ogImage = article?.socialImage ? urlFor(article.socialImage).width(1200).height(630).auto('format').url() : ''
  return { 
    title: `${article.title} | IankDuffy.com`,
    description: article?.description,
    openGraph: { 
      title: `${article.title} | IankDuffy.com`,
      description: article?.description,
      images: [
        {
          url: ogImage, 
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | IankDuffy.com`,
      description: article?.description,
      creator: '@iankduffy',
      images: [ogImage],
    },
  }
}

export default async function ArticlePage({ params }: { params: Props }) {
  const { slug }: Props = params
  const article = await getArticleFromSlug(slug)
  const articleHeaders = getContentHeader(article?.content)

  return (
    <main className='scroll-smooth'>
      <ArticleHeader title={article?.title} date={article?.publishedDate} readTime={article?.estimatedReadingTime} image={article?.image} />
      <div className='container gap-5 mx-auto lg:px-4 lg:grid lg:grid-cols-article'>
        <div className="">
          <MobileContentTable articleHeaders={articleHeaders} />
          <Content content={article?.content} />
        </div>
        <aside className='hidden lg:block min-w-xs'>
          <DesktopContentsTable articleHeaders={articleHeaders} />
        </aside>
      </div>
    </main>
  )
}