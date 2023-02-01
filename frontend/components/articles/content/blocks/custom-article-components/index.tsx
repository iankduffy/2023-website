import dynamic from "next/dynamic"

interface Props {
  [key: string]: unknown;
}

export const CustomArticleComponents: Props = {
  dumb: dynamic(() => import(`./dumb`).then((mod) => mod.Dumb)),
}

export function getComponent(component: string) {
  const Component = CustomArticleComponents[component] as React.ComponentType
  console.log(CustomArticleComponents[component], 1)

  if (!Component) {
    console.error('Cant find section', component) // eslint-disable-line no-console
    return null
  }

  return <Component />
}