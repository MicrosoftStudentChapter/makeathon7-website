import React from 'react'
import styles from './ClosedFile.module.css'

const closedfile = () => {
  return (
    <>
    
      <div className={styles.basefile}>
        <img src="Sponsors\Special Mission.png" className={styles.special} />
        <img src="Sponsors\spy-detective-design-template-criminal-260nw-2305433239 1.png" className={styles.spy} height={180} width={140} />
        <img src="Sponsors\top secret stamp.png" className={styles.secret} />
        <img src="Sponsors\Sponsors.png" className={styles.sp}  height={50} width={500}/>
        <img src="Sponsors\file text.png" className={styles.txt} height={100} width={300} />
        <div className={styles.codebox}>
          <img src="Sponsors\file code.png" className={styles.code} />
        </div>
      </div>
    
    </>
  )
}

export default closedfile
