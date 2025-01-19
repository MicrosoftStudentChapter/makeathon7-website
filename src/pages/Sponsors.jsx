import React from 'react'
import styles from '../styles/Sponsors.module.css'
import Pages from '../components/Sponsors/Pages'
import SmallBox from '../components/Sponsors/polaroid'

const Sponsors = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src="/mlsclogo.png" alt="MLSC Logo" />
        <img className={styles.menu} src="/Sponsors/menu.png" alt="MLSC Logo" />
        <Pages />       
      </div>
    </div>
    </>
  )
}

export default Sponsors
