import { StaticPageComponents } from "components/page-components"

function resolveSections(section) {
  const Section = StaticPageComponents[section._type]

  if (Section) {
    return Section
  }

  console.error('Cant find section', section) // eslint-disable-line no-console
  return null
}

export function RenderSections(props: { sections: unknown[] }) {
  const { sections } = props
  console.log({ props })

  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }
  return (
    <>
      {sections.map((section, i) => {
        const SectionComponent = resolveSections(section)
        if (!SectionComponent) {
          return <div>Missing section {section._type}</div>
        }
        return <SectionComponent {...section} key={section._key} index={i} />
      })}
    </>
  )
}