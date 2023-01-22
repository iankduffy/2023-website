export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'homePage',
      type: 'reference',
      title: 'Home Page',
      description: 'Choose page to be the frontpage',
      to: {type: 'genericPages'},
    },
  ],
}
