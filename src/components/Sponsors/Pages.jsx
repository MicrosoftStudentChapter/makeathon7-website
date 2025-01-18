import React from 'react'
import styles from './Pages.module.css'

const Pages = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>

          <div className={styles.row}>
            
            <div classname={styles.column}>
              <div className={styles.sides1}><h1 class={styles.invi}>&nbsp;</h1></div>
              <div className={styles.sides1}><h1 class={styles.invi}>&nbsp;</h1></div>
              <div className={styles.sides1}><h1 class={styles.invi}>&nbsp;</h1></div>
              <div className={styles.sideleft}><h1 class={styles.invi}>&nbsp;</h1></div>
            </div>

            <div className={styles.filespagebgleft}>
              <div className={styles.filespageleft1}>
                <div className={styles.filespageleft2}>
                  <h1 class={styles.invi}>&nbsp;</h1>
                  <h1 align="center">TITLE</h1>
                  <div class={styles.Polaroid}> 
                    <div class={styles.Inside}>
                      <div class={styles.InsidePolaroid}></div>
                    </div>
                  </div>
                  <h1 align="center">COMPANY NAME</h1>
                </div>
              </div>
            </div>

            <div className={styles.slit}><h1 class={styles.invi}>.</h1></div>

            <div className={styles.filespagebgright}>
              <div className={styles.filespageright1}>
                <div className={styles.filespageright2}>
                  <h1 class={styles.invi}>&nbsp;</h1>
                  <h1 align="center">SPONSORS</h1>
                  <div class={styles.Polaroid}> 
                    <div class={styles.Inside}>
                      <div class={styles.InsidePolaroid}></div>
                    </div>  
                  </div>
                  <h1 align="center">COMPANY NAME</h1>
                </div>
              </div>
            </div>

            <div classname={styles.column}>
              <div className={styles.sides1}><h1 class={styles.invi}>&nbsp;</h1></div>
              <div className={styles.sides1}><h1 class={styles.invi}>&nbsp;</h1></div>
              <div className={styles.sides1}><h1 class={styles.invi}>&nbsp;</h1></div>
              <div className={styles.sideright}><h1 class={styles.invi}>&nbsp;</h1></div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Pages