export default {
  name: 'skillList',
  type: 'object',
  title: 'Skill List ',
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
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [{type: 'string'}],
    },
  ],
}
