export default {
  name: 'cv',
  type: 'document',
  title: 'CV',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'CV Title',
    },
    {
      name: 'aside',
      type: 'cvAside',
      title: 'CV Aside',
    },
    {
      name: 'mainSection',
      type: 'array',
      title: 'Main Section',
      of: [{type: 'cvBlock'}],
    },
  ],
}
