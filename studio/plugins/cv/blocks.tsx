import { PortableText } from '@portabletext/react'
import styles from './styles.module.scss'



export function CvBlock({ block }: { block: any }) {
  return (
    <div className={styles.skills}>
      <h2 className={styles.header}><span className={styles.icon}>I</span>{block.title}</h2>
      <PortableText
        value={block.content}
      />
    </div>
  )
}