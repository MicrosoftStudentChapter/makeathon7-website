import React from 'react'
import styles from '../styles/Sponsors.module.css'
import Pages from '../components/Sponsors/Pages'
// import PagesT from '../components/SponsorsPageInside/Title/Pages'
// import PagesA from '../components/SponsorsPageInside/Associate/Pages'
// import PagesP from '../components/SponsorsPageInside/Power/Pages'

import PagesP from '../components/SponsorsPageInside/Final/PagesP.jsx'
import PagesT from '../components/SponsorsPageInside/Final/PagesT.jsx'
import PagesA from '../components/SponsorsPageInside/Final/PagesA.jsx'

import ClosedFile from "../components/Sponsors/closedfile/ClosedFile";

const Sponsors = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src="/mlsclogo.png" alt="MLSC Logo" />
        <img className={styles.menu} src="/Sponsors/menu.png" alt="MLSC Logo" />
        {/* <Pages />  */}
        <PagesT />    
        <PagesP />      
        <PagesA />
        <ClosedFile/>
      </div>
    </div>
    </>
  )
}

export default Sponsors
