import { StaticPageComponents } from "components/page-components"

// A Section is a sanity component, which always has a key and type
// Then other unknow keys
// Todo: Set up Types for components
interface Section {
  _type: string
  _key: string
  [key: string]: unknown
  index?: number
}

function resolveSections(section: Section) {
  const Section = StaticPageComponents[section._type]

  if (Section) {
    return Section as React.ComponentType
  }

  console.error('Cant find section', section) // eslint-disable-line no-console
  return null
}

export function RenderSections(props: { sections: Section[] }) {
  const { sections } = props

  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }
  return (
    <>
      {sections.map((section, i) => {
        const SectionComponent: React.ComponentType | null = resolveSections(section)
        if (!SectionComponent) {
          return <div>Missing section {section._type}</div>
        }
        return <SectionComponent index={i} {...section} key={section._key} />
      })}
    </>
  )
}