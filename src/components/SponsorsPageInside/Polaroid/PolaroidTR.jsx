import React from 'react';
 import styles from './PolaroidT.module.css'; // Import the CSS module
 
 const SmallBox = () => {
   return (
     <div className={styles.polaroid}>
       {/* <div className={styles.blackBox}>
         <img
           className={styles.image}
           src="/Sponsors/Devfolio_Logo-Colored.png" // Use the relative path from the  directory
           alt="Devfolio"
         />
       </div>
       <div className={styles.caption}>Devfolio</div> */}
       
       <div className={styles.blackBox}>
         <img
           className={styles.image}
           src="/Sponsors/ethindia-light.png" // Use the relative path from the  directory
           alt="Ethidia"
         />
       </div>
     </div>
   );
 };
 
 export default SmallBox;