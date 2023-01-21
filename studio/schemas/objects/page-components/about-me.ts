export default {
  name: 'aboutMe',
  type: 'object',
  title: 'About Me',
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
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
