import genericPages from './documents/genericPages'
import articles from './documents/articles'
import siteSettings from './documents/siteSettings'
import {compTypes} from './objects/page-components'
import navItem from './objects/navigation/nav-item'
import picture from './objects/blocksContent/picture'
import articleVideo from './objects/blocksContent/mux-video'
import articleCustomComponent from './objects/blocksContent/article-custom-component'
import canIUse from './objects/blocksContent/can-i-use'

export const schemaTypes = [
  genericPages,
  articles,
  siteSettings,
  ...compTypes,
  picture,
  navItem,
  articleVideo,
  articleCustomComponent,
  canIUse,
]
