import React from 'react'
import styles from './InsideFileRight.module.css'
import SmallBox from './polaroid.jsx' 

const FilesPower = () => {
  return (
    <>
                <h1 classname={styles.invi}>&nbsp;</h1>
                <h1 align="center">ASSOCIATE</h1>

                <div className={styles.center}><SmallBox/><SmallBox/><SmallBox/></div>
                <div className={styles.center}><SmallBox/><SmallBox/><SmallBox/></div>
                <div className={styles.center}><SmallBox/><SmallBox/></div>

    </>
)
}

export default FilesPower