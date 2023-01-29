import { PortableTextBlockComponent, PortableTextTypeComponent } from "@portabletext/react";
import { urlFor } from "lib/sanity"
import { SanityImage } from "types/sanity";

interface Picture {
  _key: string
  _type: string
  alt: string
  image: SanityImage
}

interface Props {
  value: Picture
}

export const Picture: PortableTextTypeComponent = function ({ value }: Props) {
  const { alt, image } = value
  const url = urlFor(image).fit('fill').width(1000).quality(80).auto('format').url()
  return (
    <figure className="my-4">
      <img src={url} />
      <figcaption className='py-1 text-sm text-center text-white lg:rounded-b-md bg-brandLight'>{alt}</figcaption>
    </figure>
  )
} 