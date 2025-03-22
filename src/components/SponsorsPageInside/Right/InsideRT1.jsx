import React from 'react';
import styles from '../FullExport/Inside.module.css';
import TitleR1 from '../PolaroidsSettings/TitleR1.jsx';

const InsideRT1 = () => {
  return (
    <>
      <div className={styles.filespagebgR}>
        <div className={styles.filespageR1}>
          <div className={styles.filespageR2}>
            <img className={styles.handprint} src="/Sponsors/ClosedFile/handprint.png" alt="HandPrint" />
            <TitleR1 />
            <img className={styles.handcuffs} src="/Sponsors/ClosedFile/Hatkadi.png" alt="Handcuffs" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InsideRT1;
