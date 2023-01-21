import { AboutSection } from "components/homepage/about";
import { Hero } from "components/homepage/hero";
import { ProjectsShowcase } from "components/homepage/projects";
import { SkillsSection } from "components/homepage/skills";
import { clientFetch } from "lib/sanity";

export async function generateStaticParams() {
  const genericPage = await getData();

  return genericPage.map((page: { slug: { current: string; }; }) => ({
    slug: page.slug.current,
  }));
}

const getData = async () => {
  const pageContent = await clientFetch('*[_type == "genericPages"]')

  return pageContent
}

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <Hero />
      <SkillsSection />
      <AboutSection />
      <ProjectsShowcase />
    </main>
  )
}
