import { CvBlock } from './blocks'
import { RenderIcon } from './cv-icons'
import styles from './styles.module.scss'

export function AsideCV({ aside }: { aside: any }) {
  const { name, jobTitle, links, blocks } = aside

  return (
    <div className={styles.asideContainer}>
      <div className={styles.topSection}>
        <img src='https://www.iankduffy.com/logo.svg' className={styles.logo} loading='eager' width={50} height={50} alt='Logo' />
        <h1>{name}</h1>
        <p className={styles.jobTitle}>{jobTitle}</p>
      </div>
      <section>
        {links.map((link: any) => {
          return <div key={link._key} className={styles.link}>
            <span><RenderIcon icon={link?.icon?.icon} /></span><span>{link.url}</span>
          </div>
        })}
      </section>
      <section className={styles.asideContainer}>
        {blocks.map((block: any) => {
          return (<CvBlock block={block} key={block._key} />)
        })}
      </section>
    </div>
  )
}