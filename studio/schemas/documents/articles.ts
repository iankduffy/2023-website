export default {
  name: 'articles',
  type: 'document',
  title: 'Articles',
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
      name: 'publishedDate', 
      type: 'date',
      title: 'Published Date'
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
      title: 'Cover Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'code'},
        {type: 'picture'},
        {type: 'articleVideo'},
        {type: 'articleCustomComp'},
        {type: 'canIUse'},
      ],
    },
    {
      title: 'OG Image',
      type: 'image',
      name: 'socialImage'
    }
  ],
}
