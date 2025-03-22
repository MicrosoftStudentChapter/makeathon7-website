import React from 'react';
import styles from './PolaroidT.module.css'; // Reuse same CSS

const PolaroidT1 = () => {
  return (
    <div className={styles.polaroid}>
      <div className={styles.blackBox}>
        <img
          className={styles.image}
          src="/Sponsors/Polygon_Logo-Colored.png"
          alt="PolyGon"
        />
      </div>
      <div className={styles.caption}>PolyGon</div>
    </div>
  );
};

export default PolaroidT1;