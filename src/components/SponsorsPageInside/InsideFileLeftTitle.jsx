import React from 'react'
import styles from './InsideFileLeft.module.css'
import Title from './Title.jsx'

const FileTitle = () => {
  return (
    <>
        <div className={styles.filespagebgleft}>
            <div className={styles.filespageleft1}>
                <div className={styles.filespageleft2}>
                    <img className={styles.handprint}   src="public\Sponsors\ClosedFile\handprint.png"  alt="HandPrint"/>
                    <Title />
                    <img className={styles.handcuffs}   src="public\Sponsors\ClosedFile\Hatkadi.png"    alt="Handcuffs"/>
                </div>
            </div>
        </div>
    </>
)
}

export default FileTitle