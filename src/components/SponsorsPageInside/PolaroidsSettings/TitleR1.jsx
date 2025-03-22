import React from "react";
import styles from "../FullExport/Inside.module.css";
import PolaroidTR1 from "../Polaroid/PolaroidTR1.jsx";

const TitleR1 = () => {
  return (
    <>
      <h1 className={styles.invi}>&nbsp;</h1>
      <h1 align="center">TITLE</h1>

      <div className={styles.center}>
        <PolaroidTR1 />
      </div>
    </>
  );
};

export default TitleR1;
