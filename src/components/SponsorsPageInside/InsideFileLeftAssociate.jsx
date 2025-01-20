import React from 'react'
import styles from './InsideFileLeft.module.css'
import Associate from './Associate.jsx'

const FileAssociate = () => {
  return (
    <>
        <div className={styles.filespagebgleft}>
            <div className={styles.filespageleft1}>
                <div className={styles.filespageleft2}>
                    <Associate />
                </div>
            </div>
        </div>
    </>
)
}
    
export default FileAssociate