import { useRef } from "react"
import { SanityDocument } from "sanity"

export function Editor ({document} : {document: SanityDocument}) {
  const { displayed }: {displayed: SanityDocument} = document
  const ref = useRef(null)
  console.log(displayed)
  return (
    <div>
      <button>Download Image</button>
      <div ref={ref}>
        {/* <h1>{display.title}</h1> */}
      </div>
    </div>
  )
}