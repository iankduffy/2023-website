
import { PortableTextBlockComponent, PortableTextComponents } from "@portabletext/react"
import { ContentLink } from "./content-link"

export const contentTableSerializers: PortableTextComponents | undefined = {
  block: {
    h1: ContentLink,
    h2: ContentLink,
    h3: ContentLink,
    h4: ContentLink,
    h5: ContentLink,
    h6: ContentLink,
  }
}