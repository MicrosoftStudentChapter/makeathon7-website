import React, { useState } from "react";
import styles from "../styles/Tracks.module.css";

const Tracks = () => {
  const [trackText, setTrackText] = useState("TRACKS");
  const [clickedButton, setClickedButton] = useState(null); // Track clicked button
  const [fadeClass, setFadeClass] = useState("fade-in"); // Track fade animation class
  const [lineWidth, setLineWidth] = useState("100%"); // Track line width
  const [lineLeft, setLineLeft] = useState("50%");

  const handleButtonClick = (trackNumber) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setTrackText(`TRACK ${trackNumber}`);
      setClickedButton(trackNumber);
      setFadeClass("fade-in");
      if (trackNumber === 1) {
        setLineWidth("10%");
        setLineLeft("22.5%");
      } else if (trackNumber === 2) {
        setLineWidth("10%");
        setLineLeft("37%");
      } else if (trackNumber === 3) {
        setLineWidth("10%");
        setLineLeft("50%");
      } else if (trackNumber === 4) {
        setLineWidth("10%");
        setLineLeft("64%");
      } else if (trackNumber === 5) {
        setLineWidth("10%");
        setLineLeft("77.5%");
      }
    }, 500); // Match the duration of the fade-out animation
  };

  const handleReset = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setTrackText("TRACKS");
      setClickedButton(null);
      setFadeClass("fade-in");
      setLineWidth("100%");
      setLineLeft("50%");
    }, 500); // Match the duration of the fade-out animation
  };

  return (
    <div className={styles.tracksContainer}>
      <div className={styles.tracks}>
        {clickedButton === null ? (
          <>
            <h1 className={`${styles.text} ${styles[fadeClass]}`}>
              {trackText}
            </h1>
            <div
              className={`${styles.line} ${styles[fadeClass]}`}
              style={{ width: lineWidth, left: lineLeft }}
            ></div>
            <div className={`${styles.buttonContainer} ${styles[fadeClass]}`}>
              <button
                className={styles.button1}
                aria-label="Track 1"
                onClick={() => handleButtonClick(1)}
              ></button>
              <button
                className={styles.button2}
                onClick={() => handleButtonClick(2)}
                aria-label="Track 2"
              ></button>
              <button
                className={styles.button3}
                onClick={() => handleButtonClick(3)}
                aria-label="Track 3"
              ></button>
              <button
                className={styles.button4}
                onClick={() => handleButtonClick(4)}
                aria-label="Track 4"
              ></button>
              <button
                className={styles.button5}
                onClick={() => handleButtonClick(5)}
                aria-label="Track 5"
              ></button>
            </div>
            <div className={`${styles.box1} ${styles[fadeClass]}`}>
              <div className={styles.removebgPreview}></div>
              <div className={`${styles.text1} ${styles[fadeClass]}`}>
                <p>Greetings Agent!</p>
                <p>Choose Your Mission</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1
              className={`${styles.text} ${styles[fadeClass]}`}
              style={{
                position: "relative",
                top: "284px",
              }}
            >
              {trackText}
            </h1>
            <div className={`${styles.text3} ${styles[fadeClass]}`}>
              Additional Information for {trackText}
            </div>
            <div
              className={styles.line}
              style={{
                position: "absolute",
                top: "132px",
                left: lineLeft,
                transform: "translateX(-50%)",
                width: lineWidth,
              }}
            ></div>
            <div
              className={styles.buttonContainer}
              style={{
                position: "absolute",
                top: "75px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <button
                className={`${styles.button1}`}
                aria-label="Track 1"
                onClick={() => handleButtonClick(1)}
              ></button>
              <button
                className={styles.button2}
                aria-label="Track 2"
                onClick={() => handleButtonClick(2)}
              ></button>
              <button
                className={styles.button3}
                aria-label="Track 3"
                onClick={() => handleButtonClick(3)}
              ></button>
              <button
                className={styles.button4}
                aria-label="Track 4"
                onClick={() => handleButtonClick(4)}
              ></button>
              <button
                className={styles.button5}
                aria-label="Track 5"
                onClick={() => handleButtonClick(5)}
              ></button>
            </div>
          </>
        )}
        {clickedButton !== null && (
          <button className={styles.button6} onClick={handleReset}></button>
        )}
      </div>
    </div>
  );
};

export default Tracks;
