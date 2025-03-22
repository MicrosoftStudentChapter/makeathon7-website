import React from 'react';
import styles from './Pages.module.css';

import InsideLT1 from '../Left/InsideLT1';
import InsideRT1 from '../Right/InsideRT1';

const PagesT1 = () => {
    return (
      <div className={styles.main}>
        <div className={styles.sidebarL}>
          <div className={styles.whitebarL}></div>
        </div>
  
        <img className={styles.Girl} src="/Sponsors/Girl.png" alt="Girl" />
  
        <div className={styles.containerL}>
          <InsideLT1 /> 
        </div>
  
        <div className={styles.containerR}>
          <InsideRT1 />
        </div>
  
        <div className={styles.sidebarR}>
          <div className={styles.whitebarR}>
            <div className={styles.turn90}>172.36F.GH99</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PagesT1;
