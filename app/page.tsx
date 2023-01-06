import { AboutSection } from "components/homepage/about";
import { Hero } from "components/homepage/hero";
import { SkillsSection } from "components/homepage/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsSection />
      <AboutSection />
    </main>
  )
}
