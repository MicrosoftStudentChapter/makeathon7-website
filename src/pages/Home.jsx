import React, { useRef, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Buttons from "../components/Buttons/Buttons";
import CardContainer from "../components/CardContainer/CardContainer";
import StackedCardContainer from "../components/StackedCardContainer/StackedCardContainer";
import stackedStyles from "../components/StackedCardContainer/StackedCardContainer.module.css";
import styles from "../styles/Home.module.css";
import stylesLogo from "../styles/logo.module.css";


const Home = () => {
  const homeRef = useRef(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

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

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToTop = () => {
    if (isScrolledDown) {
      // Scroll up to the top
      homeRef?.current.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    } else {
      homeRef?.current.scrollTo({
        left: 0,
        top: 95 * (window.innerHeight / 100),
        behavior: "smooth",
      });
    }
    setIsScrolledDown(!isScrolledDown);
  };

  return (
    <div
      ref={homeRef}
      className={styles.home}
      onScroll={(e) => handleScroll(homeRef, e)}
    >
      <a href="https://makeathon7.mlsctiet.com" rel="noopener noreferrer">
      <img
        src="../../mlsclogo.png"
        alt="mlsc_logo"
        className={styles.mlsc_logo}
      /> </a>
      <Banner />
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
        <div
          className="apply-button"
          data-hackathon-slug="hackspire-1"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
        <Buttons
          iconType="download"
          // onClick={() => alert("Well.....i work for now?")}
          style={{
            size: "48px",
            height: "44px",
            width: "312px",
            fontSize: "18px",
          }}
        >
         Coming Soon
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
