'use client'

import { useState } from "react"
import styles from './styles.module.scss'

function ArticleCard() {
  return (
    <article className={`${styles.container}`}>
      <div className={styles.article}>
        <img className="object-cover" loading="lazy" alt="Article Image" src="https://images.unsplash.com/photo-1591491719565-9cae8fd89f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80&h=1000" width="400" height="500" />
        <div className="p-4">
          <p>Category</p>
          <p>Super Long Heading</p>
          <button>Read</button>
          <p>5 Min Read</p>
        </div>
      </div>
    </article>
  )
}

export function ArticleContainerQueriesRow() {
  const [articleNumber, setArticleNumber] = useState(3)

  return (
    <section className="px-4 mb-4 lg:px-0">
      <ul className='flex justify-between w-full gap-5'>
        {[...Array(articleNumber)].map((x, i) =>
          <ArticleCard />
        )}
      </ul>
      {/* Article Row */}
      <div className='flex justify-center gap-5'>
        <button onClick={() => setArticleNumber(curr => curr + 1)} disabled={articleNumber >= 3 ? true : false}>Add Item</button>
        <button onClick={() => setArticleNumber(curr => curr - 1)} disabled={articleNumber <= 1 ? true : false}>Remove Item</button>
      </div>
    </section >
  )
}