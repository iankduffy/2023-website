"use client"
import { useIntersectionObserver } from 'hooks/use-intersection-observer'
import { useEffect, useRef } from 'react'
import { articleContentStore } from 'stores/article-contents'

interface Props {
  HeadingTag: React.ElementType
  classNames: string
  headingId: string 
  children: unknown
}

export function HeadingElement({HeadingTag, classNames, headingId, children}: Props) {
  const setHeader = articleContentStore((state) => state.setHeader)
  const ref = useRef<HTMLHeadingElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    threshold: 0.25,
    freezeOnceVisible: false,
    rootMargin: '0% 0% -60% 0%'
  })

  const isVisible = entry?.isIntersecting

  useEffect(() => {
    if (isVisible) {
      setHeader({id: headingId})
    }
  }, [isVisible])

  return (
    <HeadingTag id={headingId} className={classNames} ref={ref}>
      {children}
    </ HeadingTag>
  )
}