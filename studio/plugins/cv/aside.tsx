import { CvBlock } from './blocks'
import styles from './styles.module.scss'
import { urlFor } from '../../../frontend/lib/sanity'
export function AsideCV({ aside }) {
  const { logo, name, jobTitle, links, blocks } = aside

  // const image = urlFor(logo).url()
  // console.log(image)
  return (
    <div>
      <div className={styles.topSection}>
        <img src='https://www.iankduffy.com/logo.svg' className={styles.logo} loading='eager' />
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