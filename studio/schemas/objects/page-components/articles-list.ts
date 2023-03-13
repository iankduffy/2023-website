export default {
  name: 'articleSection',
  type: 'object',
  title: 'Articles Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Pre Header',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
