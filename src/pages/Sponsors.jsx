import React from 'react'
import styles from '../styles/Sponsors.module.css'
import Pages from '../components/Sponsors/Pages'
import SmallBox from '../components/Sponsors/polaroid'

const Sponsors = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src="/public/mlsclogo.png" alt="MLSC Logo" />
        {/*<Pages />*/}
        <SmallBox />
      </div>
    </div>
    </>
  )
}

export default Sponsors
