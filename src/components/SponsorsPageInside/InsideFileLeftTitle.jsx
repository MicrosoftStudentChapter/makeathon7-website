import React from 'react'
import styles from './InsideFileLeft.module.css'
import Title from './Title.jsx'

const FileTitle = () => {
  return (
    <>
        <div className={styles.filespagebgleft}>
            <div className={styles.filespageleft1}>
                <div className={styles.filespageleft2}>
                    <Title />
                </div>
            </div>
        </div>
    </>
)
}

export default FileTitle