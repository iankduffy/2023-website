import {deskTool} from 'sanity/desk'
import { Editor } from './editor'

// Temport E
export const generateOgPlugin = deskTool({
  name: 'OG Image Creator',
  title: 'OG Image Creator',
  structure: (S) => S.documentTypeList('articles'),
  defaultDocumentNode: (S) =>
    S.document().views([S.view.form(), S.view.component(Editor).title('OG Image Creator')]),
})
