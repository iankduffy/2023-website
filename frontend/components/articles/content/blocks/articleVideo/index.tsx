
import { PortableTextTypeComponent } from "@portabletext/react"
import { Video } from "./video"

export const ArticleVideo: PortableTextTypeComponent = function ({ value }) {
  const { alt, video } = value
  return (
    <Video playbackId={video.asset.playbackId} title={alt} />
  )
} 