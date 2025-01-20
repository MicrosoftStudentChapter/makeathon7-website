import React from 'react'
import styles from './InsideFileRight.module.css'
import SmallBox from './polaroid.jsx' 

const FilesLeftTitle = () => {
  return (
    <>
        <div className={styles.filespagebgright}>

            <div className={styles.filespageright1}>

                <div className={styles.filespageright2}>
                <h1 classname={styles.invi}>&nbsp;</h1>
                <h1 align="center">ASSOCIATE</h1>

                <div className={styles.center}><SmallBox/><SmallBox/><SmallBox/></div>
                <div className={styles.center}><SmallBox/><SmallBox/><SmallBox/></div>
                <div className={styles.center}><SmallBox/><SmallBox/></div>

                </div>

            </div>

        </div>
    </>
)
}

export default FilesLeftTitle