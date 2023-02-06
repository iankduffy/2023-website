'use client'
import { useIntersectionObserver } from 'hooks/use-intersection-observer'
import React, { useRef } from 'react'

export function Skills({ skills }: { skills: string[] }) {
  const ref = useRef<HTMLUListElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    threshold: 0.25,
    freezeOnceVisible: true
  })
  const isVisible = entry?.isIntersecting


  return (
    <ul ref={ref} className='grid gap-2 my-5 text-4xl font-bold uppercase text-light t lg:grid-cols-2 sibling-hover:text-[#344256]'>
      {skills.map((skill, index) => {
        const delay = index * 100
        return (
          <li key={skill.split(' ').join('-')} className={`animateIn ${isVisible ? 'visible' : ''}`} style={{ '--delay': `${delay}ms` } as React.CSSProperties}>
            <span className='inline duration-700 cursor-default transition-color hover:text-white child'>{skill}</span></li>
        )
      })}
    </ul >
  )
}