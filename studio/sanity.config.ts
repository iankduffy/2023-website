import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {muxInput} from 'sanity-plugin-mux-input'
import {generateCvPlugin} from './plugins/cv-plugin'
import { generateOgPlugin } from './plugins/og-image'

export default defineConfig({
  name: 'default',
  title: 'Portfolio-2023',
  projectId: 'hpnwtus3',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput(), muxInput(), generateCvPlugin, generateOgPlugin],

  schema: {
    types: schemaTypes,
  },
})
