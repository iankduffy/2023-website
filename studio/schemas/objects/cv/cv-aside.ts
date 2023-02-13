export default {
  name: 'cvAside',
  type: 'object',
  title: 'CV Aside',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Job Title',
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{type: 'cvLinks'}],
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      of: [{type: 'cvBlock'}],
    },
  ],
}
