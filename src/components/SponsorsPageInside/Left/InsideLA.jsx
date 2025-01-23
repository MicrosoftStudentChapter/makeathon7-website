import React from 'react'
import styles from '../FullExport/Inside.module.css'
import Associate from '../PolaroidsSettings/Associate.jsx'
import Power from '../PolaroidsSettings/Power.jsx'
import Title from '../PolaroidsSettings/Title.jsx'

const LA = () => {

let contentL;
// if (scrollPosition > 600) {
    contentL = <Associate />;
// } else if (scrollPosition > 400) {
//     contentL = <Power />;
// } else if (scrollPosition > 200) {
//     contentL = <Title />;
// } else {
//     content = <ClosedFile />;
//}

  return (
    <>
        <div className={styles.filespagebgL}>

            <div className={styles.filespageL1}>

                <div className={styles.filespageL2}>
                <img className={styles.SpyGunLogo}  src="public\Sponsors\ClosedFile\007-Logo.png"  alt="007Logo"/>
                <img className={styles.target}      src="public\Sponsors\ClosedFile\Crosshair.png"  alt="Crosshair"/>
                {contentL}
                </div>

            </div>

        </div>
    </>
)
}

export default LA