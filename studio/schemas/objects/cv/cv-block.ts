export default {
  name: 'cvBlock',
  type: 'object',
  title: 'CV Aside',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
