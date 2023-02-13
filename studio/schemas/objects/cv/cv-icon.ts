import {iconOptions} from '../../../plugins/cv/cv-icons'

export default {
  name: 'cvIcon',
  type: 'object',
  title: 'CV Icon',
  fields: [
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      options: {
        list: [...iconOptions],
      },
    },
  ],
}
