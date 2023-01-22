import { RenderSections } from "lib/render-components";
import { getHomePage } from "queries/generic-page/home-page";

// export async function generateStaticParams() {
//   const genericPage = await getData();

//   return genericPage.map((page: { slug: { current: string; }; }) => ({
//     slug: page.slug.current,
//   }));
// }

export default async function Home() {
  const { page } = await getHomePage()

  return (
    <main>
      <RenderSections sections={page.content} />
    </main>
  )
}
