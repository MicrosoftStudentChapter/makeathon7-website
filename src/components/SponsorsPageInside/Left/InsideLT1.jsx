import React from 'react';
import styles from '../FullExport/Inside.module.css';
import Title1 from '../PolaroidsSettings/Title1.jsx';

const InsideLT1 = () => {
  return (
    <>
      <div className={styles.filespagebgL}>
        <div className={styles.filespageL1}>
          <div className={styles.filespageL2}>
            <img className={styles.SpyGunLogo} src="/Sponsors/ClosedFile/007-Logo.png" alt="007Logo" />
            <img className={styles.target} src="/Sponsors/ClosedFile/Crosshair.png" alt="Crosshair" />
            <Title1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default InsideLT1;
