import {deskTool} from 'sanity/desk'
import {CV} from './cv'

export const generateCvPlugin = deskTool({
  name: 'cv',
  title: 'CV Generator',
  structure: (S) => S.documentTypeList('cv'),
  defaultDocumentNode: (S) =>
    S.document().views([S.view.form(), S.view.component(CV).title('Preview')]),
})
