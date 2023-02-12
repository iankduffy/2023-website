import { useRef } from 'react'
import { AsideCV } from './aside'
import { PdfButton } from './pdfButton'
import styles from './styles.module.scss'
import { useReactToPrint } from 'react-to-print';
import { CvBlock } from './blocks';

// eslint-disable-next-line react/prop-types
export function CV({ document }) {
  const { published } = document
  const ref = useRef(null)

  const handlePrint = useReactToPrint({
    copyStyles: true,
    content: () => ref.current,
  });

  console.log(published)

  return (
    <div>
      <div>
        <button onClick={handlePrint}>Print</button>
      </div>
      <div className={styles.container}>
        <div className={styles.layout} ref={ref}>
          <aside className={styles.aside}><AsideCV aside={published.aside} /></aside>
          <main className={styles.main}>
            {published.mainSection.map(section => {
              return (
                <CvBlock block={section} key={section._key} />
              )
            })}</main>
        </div>
      </div>
    </div>
  )
}