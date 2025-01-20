import React from 'react'
import styles from './Pages.module.css'
import FilesLeftTitle from './InsideFileRightPower.jsx' 
import FilesRightTitle from './InsideFileLeftPower.jsx' 

const PagesT = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.whitebar}></div>
        </div>

        <div className={styles.container}>
          <FilesLeftTitle />
          <img className={styles.target}      src="public\Sponsors\ClosedFile\Crosshair.png"  alt="Crosshair"/>
        </div>

        <div className={styles.container}>
          <FilesRightTitle />
          <img className={styles.handprint}   src="public\Sponsors\ClosedFile\handprint.png"  alt="HandPrint"/>
          <img className={styles.handcuffs}   src="public\Sponsors\ClosedFile\Hatkadi.png"    alt="Handcuffs"/>
        
        </div>

        <div className={styles.sidebar}>
          <div className={styles.whitebar}>
            <div className={styles.turn90}>172.36F.GH99</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default PagesT