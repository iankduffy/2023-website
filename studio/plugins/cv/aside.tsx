import { CvBlock } from './blocks'
import styles from './styles.module.scss'

export function AsideCV({ aside }) {
  const { logo, name, jobTitle, links, blocks } = aside
  console.log(aside)
  return (
    <div>
      <div className={styles.topSection}>
        <h1>{name}</h1>
        <p>{jobTitle}</p>
      </div>
      <ul>
        {links.map(link => {
          return <li key={link._key}>
            {link.url}
          </li>
        })}
      </ul>
      <div>
        {blocks.map(block => {
          return (<CvBlock block={block} key={block._key} />)
        })}
      </div>
    </div>
  )
}