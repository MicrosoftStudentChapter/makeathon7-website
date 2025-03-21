import React from 'react'
import styles from './Pages.module.css'
import LT from '../Left/InsideLT.jsx' 
import RT from '../Right/InsideRT.jsx' 

const PagesT = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sidebarL}>
          <div className={styles.whitebarL}></div>
        </div>

        <img className={styles.Girl} src="/Sponsors/Girl.png" alt="Girl" />;

        <div className={styles.containerL}>
          <LT />
        </div>

        <div className={styles.containerR}>
          <RT />
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

export default PagesT