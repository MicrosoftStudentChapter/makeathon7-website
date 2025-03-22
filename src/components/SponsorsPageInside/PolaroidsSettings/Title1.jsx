import React from "react";
import styles from "../FullExport/Inside.module.css";
import PolaroidT1 from "../Polaroid/PolaroidT1.jsx";

const Title1 = () => {
  return (
    <>
      <h1 className={styles.invi}>&nbsp;</h1>
      <h1 align="center">TITLE</h1>

      <div className={styles.center}>
        <PolaroidT1 />
      </div>
    </>
  );
};

export default Title1;
