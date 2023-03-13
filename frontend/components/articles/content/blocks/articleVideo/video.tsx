'use client'
import MuxPlayer from "@mux/mux-player-react/lazy"

interface Props {
  playbackId: string
  title: string
}

export function Video({ playbackId, title }: Props) {
  return (
    <>
      <MuxPlayer playbackId={playbackId} metadata={{ video_title: title }} />
    </>
  )
}