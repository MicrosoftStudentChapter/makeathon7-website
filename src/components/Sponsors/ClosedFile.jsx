import React from 'react'
import styles from './ClosedFile.module.css'

const ClosedFile = () => {
  return (
    <>
    
      <div className={styles.basefile}>
        <img src="Sponsors\ClosedFile\Special Mission.png" className={styles.special} />
        <img src="Sponsors\ClosedFile\Spy.png" className={styles.spy} height={180} width={140} /> 
        <img src="Sponsors\ClosedFile\top secret stamp.png" className={styles.secret} />
        <img src="Sponsors\ClosedFile\Sponsors.png" className={styles.sp}  height={50} width={500}/>
        <img src="Sponsors\ClosedFile\file text.png" className={styles.txt} height={100} width={300} />
        <div className={styles.codebox}>
          <img src="Sponsors\ClosedFile\file code.png" className={styles.code} />
        </div>
      </div>
    
    </>
  )
}

export default ClosedFile
