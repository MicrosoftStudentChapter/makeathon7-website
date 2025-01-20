import React from 'react'
import styles from '../styles/Sponsors.module.css'

import PagesP from '../components/SponsorsPageInside/PagesP.jsx'
import PagesT from '../components/SponsorsPageInside/PagesT.jsx'
import PagesA from '../components/SponsorsPageInside/PagesA.jsx'

import ClosedFile from "../components/Sponsors/ClosedFile";

const Sponsors = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src="/mlsclogo.png" alt="MLSC Logo" />
        <img className={styles.menu} src="/Sponsors/menu.png" alt="MLSC Logo" />
        {/* <Pages />  */}
        {/*<PagesT />  */}  
         {/*<PagesP /> */}     
        <PagesA />
        {/*<ClosedFile/>*/}
      </div>
    </div>
    </>
  )
}

export default Sponsors
