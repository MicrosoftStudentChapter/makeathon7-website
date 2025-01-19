import React from 'react'
import styles from './Pages.module.css'
// import SmallBox from '../components/Sponsors/polaroid'

const Pages = () => {
  return (
    <>
      <div className={styles.main}>

        <div className={styles.sidebar}><div className={styles.whitebar}></div></div>

        <div className={styles.container}>

          <div className={styles.filespagebgleft}>

            <div className={styles.filespageleft1}>

              <div className={styles.filespageleft2}>
                <h1 classname={styles.invi}>&nbsp;</h1>
                <h1 align="center">TITLE</h1>

                <h1 align="center">COMPANY NAME</h1>
              </div>

            </div>

          </div>

        </div>

        <div className={styles.container}>

          <div className={styles.filespagebgright}>

            <div className={styles.filespageright1}>

              <div className={styles.filespageright2}>
                <h1 classname={styles.invi}>&nbsp;</h1>
                <h1 align="center">TITLE</h1>



                <h1 align="center">COMPANY NAME</h1>
              </div>

            </div>

          </div>
        </div>

        <div className={styles.sidebar}><div className={styles.whitebar}><div className={styles.turn90}>172.36F.GH99</div></div></div>

      </div>
    </>
        )
}

        export default Pages