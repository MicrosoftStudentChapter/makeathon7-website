import React from 'react'
import styles from './Pages.module.css'
import SmallBox from './polaroid.jsx' 

const FilesLeftTitle = () => {
  return (
    <>
        <div className={styles.filespagebgleft}>

            <div className={styles.filespageleft1}>

                <div className={styles.filespageleft2}>
                <h1 classname={styles.invi}>&nbsp;</h1>
                <h1 align="center">TITLE</h1>

                <div className={styles.center}><SmallBox/><SmallBox/><SmallBox/></div>
                <div className={styles.center}><SmallBox/><SmallBox/><SmallBox/></div>
                <div className={styles.center}><SmallBox/><SmallBox/></div>

                <h1 align="center">COMPANY NAME</h1>
                </div>

            </div>

        </div>
    </>
)
}

export default FilesLeftTitle