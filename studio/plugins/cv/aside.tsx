import { CvBlock } from './blocks'
import styles from './styles.module.scss'

export function AsideCV({ aside }: { aside: any }) {
  const { name, jobTitle, links, blocks } = aside

  return (
    <div className={styles.asideContainer}>
      <div className={styles.topSection}>
        <img src='https://www.iankduffy.com/logo.svg' className={styles.logo} loading='eager' width={50} height={50} alt='Logo' />
        <h1>{name}</h1>
        <p>{jobTitle}</p>
      </div>
      <ul>
        {links.map((link: any) => {
          return <li key={link._key}>
            {link.url}
          </li>
        })}
      </ul>
      <div className={styles.asideContainer}>
        {blocks.map((block: any) => {
          return (<CvBlock block={block} key={block._key} />)
        })}
      </div>
    </div>
  )
}