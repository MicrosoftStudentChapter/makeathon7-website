import React from 'react'
import styles from './Inside.module.css'
import SmallBox from './Polaroid.jsx' 

const FilesLeftTitle = () => {
  return (
    <>
        <div className={styles.filespagebgright}>

            <div className={styles.filespageright1}>

                <div className={styles.filespageright2}>
                <h1 classname={styles.invi}>&nbsp;</h1>
                <h1 align="center">ASSOCIATE</h1>
                <img className={styles.SpyGunLogo}  src="public\Sponsors\ClosedFile\007-Logo.png"  alt="007Logo"/>
                <img className={styles.target}      src="public\Sponsors\ClosedFile\Crosshair.png"  alt="Crosshair"/>
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