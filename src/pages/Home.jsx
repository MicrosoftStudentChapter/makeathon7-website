import React, { useRef, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Buttons from "../components/Buttons/Buttons";
import CardContainer from "../components/CardContainer/CardContainer";
import StackedCardContainer from "../components/StackedCardContainer/StackedCardContainer";
import stackedStyles from "../components/StackedCardContainer/StackedCardContainer.module.css";
import styles from "../styles/Home.module.css";
import stylesLogo from "./IDK.module.css";

const Home = () => {
  const homeRef = useRef(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false); // Track scroll state

  useEffect(() => {
    const flickerElement = document.querySelector(`.${styles.home}`);
    let grayscale = 0;
    let increasing = true;
    const interval = setInterval(() => {
      if (increasing) {
        grayscale += 7.5;
        if (grayscale >= 60) increasing = false;
      } else {
        grayscale -= 10;
        if (grayscale <= 0) increasing = true;
      }
      flickerElement.style.filter = `grayscale(${grayscale}%)`;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Removed the devfolio script since we're not using the embedded button

  const scrollToTop = () => {
    if (isScrolledDown) {
      // Scroll up to the top
      homeRef?.current.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll down to a specific point (e.g., 90% of the page height)
      homeRef?.current.scrollTo({
        left: 0,
        top: 95 * (window.innerHeight / 100),
        behavior: "smooth",
      });
    }
    // Toggle the scroll state
    setIsScrolledDown(!isScrolledDown);
  };

  return (
    <div
      ref={homeRef}
      className={styles.home}
      onScroll={(e) => handleScroll(homeRef, e)}
    >
      <Banner />
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <img
        src="https://res.cloudinary.com/dljpfochn/image/upload/v1745520987/mlsclogo_wbhck3.png"
        alt="Top Left Logo"
        className={`${styles.logo} ${styles.logoTopLeft}`}
      />
      <img
        src="https://res.cloudinary.com/dljpfochn/image/upload/v1745520985/acm_1_dwbfik.png"
        alt="Top Right Logo"
        className={`${styles.logo} ${styles.logoTopRight}`}
      />
      <img
        src="https://res.cloudinary.com/dljpfochn/image/upload/v1745520986/hackspire_flex-removebg-preview_vu18rv.png"
        alt="Center Logo"
        className={`${styles.logo} ${styles.logoCenter}`}
      />

      </div>

      <div className={styles.flickerEffect}></div>
      <div className={stylesLogo.logoContainer}>
        {" "}
        {/* Wrap logos inside a div */}
        <img
          className={stylesLogo.devfolio}
          src="/Sponsors/Devfolio-white.png"
          alt="DEVFOLIO LOGO"
        />
        <img
          className={stylesLogo.ethindia}
          src="/Sponsors/ethindia-light.png"
          alt="ETHINDIA LOGO"
        />
      </div>
      <div className={styles.button_container}>
        {/* Replaced the devfolio script button with our custom button */}
        <Buttons
          iconType="devfolio"
          backgroundColor="#3770FF" // Devfolio blue color
          onClick={() => window.open('https://hackspire-1.devfolio.co/', '_blank')}
          style={{
            height: "44px",
            width: "312px",
            fontSize: "18px",
          }}
        >
          Apply with Devfolio
        </Buttons>
        <Buttons
          iconType="download"
          onClick={() => alert("----")}
          style={{
            size: "48px",
            height: "44px",
            width: "312px",
            fontSize: "18px",
          }}
        >
          Download Our App
        </Buttons>
      </div>
      <CardContainer />
      <StackedCardContainer scrollToTop={scrollToTop} />
    </div>
  );
};

let prevCardsPosition = Array(5).fill(-1);
let cardsPosition = Array(5).fill(-1);

const handleScroll = (homeRef, event) => {
  let cardsEl = document.querySelectorAll(`.${stackedStyles.stackedCard3}`);
  cardsEl.forEach((cardEl, index) => {
    console.log(index, cardEl.getBoundingClientRect().top);
  });
};

export default Home;
