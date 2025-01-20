import React from 'react'
import styles from './Pages.module.css'
import FilesLeftTitle from './InsideFileRightTitle.jsx' 
import FilesRightTitle from './InsideFileLeftTitle.jsx' 

const PagesT = () => {
  return (
    <>
      <div className={styles.main}>

        <div className={styles.sidebar}><div className={styles.whitebar}></div></div>

        <div className={styles.container}>
          <FilesLeftTitle/>
        </div>

        <div className={styles.container}>
          <FilesRightTitle/>
        </div>
        
        <div className={styles.sidebar}><div className={styles.whitebar}><div className={styles.turn90}>172.36F.GH99</div></div></div>

      </div>
    </>
        )
}

export default PagesT