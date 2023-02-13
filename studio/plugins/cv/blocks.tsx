import { PortableText } from '@portabletext/react'
import styles from './styles.module.scss'
import { RenderIcon } from './cv-icons'



export function CvBlock({ block }: { block: any }) {
  return (
    <div className={styles.skills}>
      <h2 className={styles.header}><span className={styles.icon}><RenderIcon icon={block?.icon?.icon} /></span>{block.title}</h2>
      <PortableText
        value={block.content}
      />
    </div>
  )
}