import {compTypes} from '../objects/page-components'

const components = compTypes.map(comp => {
  return { type: comp.name}
})

export default {
  name: 'genericPages',
  type: 'document',
  title: 'Generic Pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: components
    },
  ],
}
