import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.wrapper}>
        <div className={styles.loadingBullet}>
          <img src="/Loading/bulletLoading.png" alt="Bullet" />
        </div>
        <div className={styles.loadingGun}>
          <img src="/Loading/gunLoading.png" alt="Gun" />
        </div>
      </div>
      <div className={styles.text}>
        <h1>LOADING...</h1>
      </div>
    </div>
  );
};

export default Loading;
