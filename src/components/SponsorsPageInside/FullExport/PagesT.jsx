import React from 'react'
import styles from './Pages.module.css'
import LT from '../Left/InsideLT.jsx' 
import RT from '../Right/InsideRT.jsx' 

const PagesT = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.whitebar}></div>
        </div>

        <div className={styles.container}>
          <LT />
        </div>

        <div className={styles.container}>
          <RT />
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