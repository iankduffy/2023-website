import { getArticleFromSlug } from "queries/articles/articles"

interface Props {
  slug: string
}

export default async function Head({ params }: { params: { slug: string } }) {
  const { slug }: Props = params
  const article = await getArticleFromSlug(slug)
  const pageTitle = `${article.title} | iankduffy.com`

  return (
    <>
      <title>{pageTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={article?.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
