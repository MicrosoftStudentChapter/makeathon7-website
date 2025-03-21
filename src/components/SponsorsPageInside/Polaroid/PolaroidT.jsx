import React from 'react';
import styles from './PolaroidT.module.css'; // Import the CSS module

const SmallBox = () => {
  return (
    <div className={styles.polaroid}>
      <div className={styles.blackBox}>
        <img
          className={styles.image}
          src="/Sponsors/Devfolio-white.png" // Use the relative path from the public directory
          alt="Devfolio"
        />
      </div>

      <div className={styles.blackBox}>
         <img
           className={styles.image}
           src="/Sponsors/Polygon-light.webp" // Use the relative path from the  directory
           alt="Polygon"
         />
       </div>

       {/* <div className={styles.blackBox}>
         <img
           className={styles.image}
           src="/Sponsors/ethindia-dark.png" // Use the relative path from the  directory
           alt="Ethidia"
         />
       </div>
       <div className={styles.caption}>Ethidia</div>
       
       <div className={styles.blackBox}>
         <img
           className={styles.image}
           src="/Sponsors/Polygon_Logo-Colored.png" // Use the relative path from the  directory
           alt="Polygon"
         />
       </div>
       <div className={styles.caption}>Polygon</div> */}
     </div>
  );
};

export default SmallBox;