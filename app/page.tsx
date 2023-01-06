import { AboutSection } from "components/shared/homepage/about";
import { Hero } from "components/shared/homepage/hero";
import { SkillsSection } from "components/shared/homepage/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsSection />
      <AboutSection />
    </main>
  )
}
