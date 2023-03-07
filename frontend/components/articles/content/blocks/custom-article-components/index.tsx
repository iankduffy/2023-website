import dynamic from "next/dynamic"

interface Props {
  [key: string]: unknown;
}

export const CustomArticleComponents: Props = {
  dumb: dynamic(() => import(`./dumb`).then((mod) => mod.Dumb)),
  articleContainerQueriesRow: dynamic(() => import(`./container-queries-article-row`).then((mod) => mod.ArticleContainerQueriesRow)),
  cssVarButtons: dynamic(() => import('./css-var-buttons').then((mod) => mod.CssVarButtons))
}

export function getComponent(component: string) {
  const Component = CustomArticleComponents[component] as React.ComponentType

  if (!Component) {
    console.error('Cant find section', component) // eslint-disable-line no-console
    return null
  }

  return <Component />
}