import { PortableText } from '@portabletext/react'
import type {
  PortableTextBlock,
} from '@portabletext/types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { AnimateIn } from 'components/shared/animateIn'
import { urlFor } from 'lib/sanity'
import React from 'react'

interface Props {
  title: string
  content: PortableTextBlock[]
  image: SanityImageSource
  index?: number
}

export function AboutSection({ title = '', content = [], image }: Props): JSX.Element {
  const url = urlFor(image).width(500).height(500).fit('fill').quality(80).auto('format').url()
  return (
    <AnimateIn>
      <section className='container grid items-center min-h-screen gap-10 py-5 mx-auto lg:grid-cols-2'>
        <div className='px-3 lg:mb-10'>
          <h2 className='my-2 mb-4 text-3xl font-bold text-white uppercase lg:text-5xl' style={{ '--delay': `${500}ms` } as React.CSSProperties}>{title}</h2>
          <div className='text-light [&>*]:mb-4' style={{ '--delay': `${700}ms` } as React.CSSProperties}>
            <PortableText value={content} />
          </div>
        </div>
        <img src={url} loading='lazy' width='500' height='500' alt='me' style={{ '--delay': `${900}ms` } as React.CSSProperties} />
      </section>
    </AnimateIn>

  )
}