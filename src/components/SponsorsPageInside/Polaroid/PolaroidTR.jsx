import React from 'react';
 import styles from './PolaroidT.module.css'; // Import the CSS module
 
 const SmallBox = () => {
   return (
     <div className={styles.polaroid}>
      <div className={styles.blackBox}>
         <img
           className={styles.image}
           src="/Sponsors/ethindia-dark.png" // Use the relative path from the  directory
           alt="ETH India"
         />
       </div>
       <div className={styles.caption}>ETH India</div>
       
       {/*<div className={styles.blackBox}>
         <img
           className={styles.image}
           src="/Sponsors/ethindia-light.png" // Use the relative path from the  directory
           alt="Ethidia"
         />
       </div>*/}
     </div>
   );
 };
 
 export default SmallBox;