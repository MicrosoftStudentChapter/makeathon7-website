import React from 'react'
import styles from './Pages.module.css'
import LP from '../Left/InsideLP.jsx'
import RP from '../Right/InsideRP.jsx'

const PagesP = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.whitebar}></div>
        </div>

        <div className={styles.container}>
          <LP />
        </div>

        <div className={styles.container}>
          <RP />
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

export default PagesP