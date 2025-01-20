import React from 'react'
import styles from './Pages.module.css'
import FilesLeftTitle from './InsideFileRightPower.jsx'
import FilesRightTitle from './InsideFileLeftPower.jsx'

const PagesP = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.whitebar}></div>
        </div>

        <div className={styles.container}>
          <FilesLeftTitle />
        </div>

        <div className={styles.container}>
          <FilesRightTitle />
        </div>

        <div className={styles.sidebar}>
          <div className={styles.whitebar}>
            <div className={styles.turn90}>172.36F.GH99</div>
          </div>
        </div>

        <img
          className={styles.handprint}
          src="public\Sponsors\ClosedFile\handprint.png" // Use the relative path from the public directory
          alt="Handprint"
        />

        <img
          className={styles.target}
          src="public\Sponsors\ClosedFile\Crosshair.png" // Use the relative path from the public directory
          alt="Target Logo"
        />

        <img
          className={styles.handcuffs}
          src="public\Sponsors\ClosedFile\Hatkadi.png"
          alt="Handcuffs"
        />
      </div>
    </>
  )
}

export default PagesP