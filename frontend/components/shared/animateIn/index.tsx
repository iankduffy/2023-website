'use client'
import { useIntersectionObserver } from "hooks/use-intersection-observer"
import { useRef } from "react"

interface Props {
  children: React.ReactNode
}

export function AnimateIn({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    threshold: 0.5,
    freezeOnceVisible: true
  })

  const isVisible = entry?.isIntersecting

  return (
    <div className={`animateInParent ${isVisible ? 'visible' : ''}`} ref={ref}>
      {children}
    </div>
  )
}