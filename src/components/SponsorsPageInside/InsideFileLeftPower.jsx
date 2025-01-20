import React from 'react'
import styles from './InsideFileLeft.module.css'
import Power from './Power.jsx'

const FileTitle = () => {
  return (
    <>
        <div className={styles.filespagebgleft}>
            <div className={styles.filespageleft1}>
                <div className={styles.filespageleft2}>
                    <Power />
                </div>
            </div>
        </div>
    </>
)
}

export default FileTitle