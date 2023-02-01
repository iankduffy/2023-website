export default {
  name: 'articleCustomComp',
  type: 'object',
  title: 'Article Based Custom Component',
  fields: [
    {
      name: 'component',
      type: 'string',
      title: 'Frontend End Set Up Component',
      options: {
        list: [{title: 'Dumby Component', value: 'dumb'}],
      },
    },
  ],
}
