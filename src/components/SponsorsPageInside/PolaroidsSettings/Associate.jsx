import React from 'react'
import styles from '../FullExport/Inside.module.css'
import SmallBox from '../Polaroid/Polaroid.jsx'

const Associate = () => {
  return (
    <>
      <h1 classname={styles.invi}>&nbsp;</h1>
      <h1 align="center">ASSOCIATE SPONSORS</h1>

      <div className={styles.center}><SmallBox /><SmallBox /><SmallBox /></div>
      <div className={styles.center}><SmallBox /><SmallBox /><SmallBox /></div>
      <div className={styles.center}><SmallBox /><SmallBox /></div>

    </>
  )
}

export default Associate