import React from 'react'
import styles from '../FullExport/Inside.module.css'
import Title from '../PolaroidsSettings/Title.jsx'

const FileTitle = () => {
  return (
    <>
        <div className={styles.filespagebgR}>
            <div className={styles.filespageR1}>
                <div className={styles.filespageR2}>
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