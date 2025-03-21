import React from 'react'
import styles from './Pages.module.css'
import LP from '../Left/InsideLP.jsx'
import RP from '../Right/InsideRP.jsx'

const PagesP = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sidebarL}>
          <div className={styles.whitebarL}></div>
        </div>

        <img className={styles.Girl} src="/Sponsors/Girl.png" alt="Girl" />;

        <div className={styles.containerL}>
          <LP />
        </div>

        <div className={styles.containerR}>
          <RP />
        </div>

        <div className={styles.sidebarR}>
          <div className={styles.whitebarR}>
            <div className={styles.turn90}>172.36F.GH99</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default PagesP