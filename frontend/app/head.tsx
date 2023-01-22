import { getHomePage } from "queries/generic-page/home-page"

export default async function Head() {
  const { page } = await getHomePage()
  const pageTitle = `${page.title} | iankduffy.com`

  return (
    <>
      <title>{pageTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={page.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
