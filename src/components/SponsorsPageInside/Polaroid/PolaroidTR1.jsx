import React from 'react';
import styles from './PolaroidT.module.css';

const PolaroidTR1 = () => {
  return (
    <div className={styles.polaroid}>
      <div className={styles.blackBox}>
        <img
          className={styles.image}
          src="/Sponsors/facebook.png"
          alt="sponsor"
        />
      </div>
      <div className={styles.caption}>Sponsor</div>
    </div>
  );
};

export default PolaroidTR1;
