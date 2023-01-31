export default {
  name: 'articleVideo',
  type: 'object',
  title: 'Article Video',
  fields: [
    {
      name: 'video',
      type: 'mux.video',
      title: 'Video',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Tex for video',
    },
  ],
}
