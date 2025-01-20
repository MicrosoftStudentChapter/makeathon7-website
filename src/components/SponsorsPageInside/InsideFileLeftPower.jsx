import React from 'react'
import styles from './InsideFileLeft.module.css'
import SmallBox from './polaroid.jsx' 

const FilesLeftTitle = () => {
  return (
    <>
        <div className={styles.filespagebgleft}>

            <div className={styles.filespageleft1}>

                <div className={styles.filespageleft2}>
                <h1 classname={styles.invi}>&nbsp;</h1>
                <h1 align="center">TITLE</h1>

                <div className={styles.center}><SmallBox/><SmallBox/></div>
                <div className={styles.center}><SmallBox/></div>
                <div className={styles.center}><SmallBox/><SmallBox/></div>

                </div>

            </div>

        </div>
    </>
)
}

export default FilesLeftTitle