import React from 'react'
import styles from '../FullExport/Inside.module.css'
import Power from '../PolaroidsSettings/Power.jsx'

const LP = () => {
  return (
    <>
        <div className={styles.filespagebgL}>

            <div className={styles.filespageL1}>

                <div className={styles.filespageL2}>
                <img className={styles.SpyGunLogo}  src="\Sponsors\ClosedFile\007-Logo.png"  alt="007Logo"/>
                <img className={styles.target}      src="\Sponsors\ClosedFile\Crosshair.png"  alt="Crosshair"/>
                <Power />                
                </div>

            </div>

        </div>
    </>
)
}

export default LP