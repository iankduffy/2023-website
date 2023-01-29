import genericPages from './documents/genericPages'
import articles from './documents/articles'
import siteSettings from './documents/siteSettings'
import {compTypes} from './objects/page-components'
import picture from './objects/blocksContent/picture'

export const schemaTypes = [genericPages, articles, siteSettings, ...compTypes, picture]
