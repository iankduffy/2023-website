import dynamic from 'next/dynamic';
import { LoadableComponent } from 'next/dynamic';
interface Props {
  [key: string]: unknown;
}

export const StaticPageComponents: Props = {
  intro: dynamic(() => import(`./homepage/hero`).then((mod) => mod.Hero)),
  skillList: dynamic(() =>
    import(`./homepage/skills`).then((mod) => mod.SkillsSection)
  ),
  aboutMe: dynamic(() =>
    import('./homepage/about').then((mod) => mod.AboutSection)
  ),
};
