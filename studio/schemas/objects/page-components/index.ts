import intro from './intro-hero'
import skillList from './skills-list'
import aboutMe from './about-me'

export const compTypes = [intro, skillList, aboutMe]

const test = compTypes.map((type) => type.name)
console.log(test)
