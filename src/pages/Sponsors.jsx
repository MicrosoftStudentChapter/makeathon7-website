import React, { useState, useEffect } from 'react';
import styles from '../styles/Sponsors.module.css';
import PagesT from '../components/SponsorsPageInside/FullExport/PagesT.jsx';
import PagesT1 from '../components/SponsorsPageInside/FullExport/PagesT1.jsx';
import PagesP from '../components/SponsorsPageInside/FullExport/PagesP.jsx';
import PagesA from '../components/SponsorsPageInside/FullExport/PagesA.jsx';
import ClosedFile from '../components/SponsorsPageInside/ClosedFiles/ClosedFile.jsx';
import Whysus from '../components/SponsorsPageInside/Sus/WhySus.jsx';
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer/Footer.jsx"

const Sponsors = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getComponent = () => {
    if (scrollPosition > 600) return <Whysus key="whysus" />;
    if (scrollPosition > 450) return <PagesA key="pagesa" />;
    if (scrollPosition > 300) return <PagesP key="pagesp" />;
    if (scrollPosition > 150) return <PagesT key="pagest" />;
    return <ClosedFile key="closedfile" />;
  };

  return (
    <>
      <div className={`${styles.wrapper} ${
        scrollPosition > 150 ? styles.scrolled : ""
      } ${scrollPosition > 600 ? styles.wrapperWSUS : ""}`}>
        <div className={styles.container}>
          <div className={styles.AbsoluteFixed}>
            <a href="https://makeathon7.mlsctiet.com" rel="noopener noreferrer">
            <img className={styles.logo} src="/mlsclogo.png" alt="MLSC Logo" />
            </a>
            {/* <img className={styles.menu} src="/Sponsors/menu.png" alt="Menu" /> */}
            {/* Scroll Down Arrow (Only show if near top) */}
            {scrollPosition < 150 && (
              <motion.div
                className={styles.scrollArrow}
                animate={{ y: [0, 30, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown size={32} color="#fff" />
              </motion.div>
            )}
      } ${scrollPosition > 600 ? styles.wrapperWSUS : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.AbsoluteFixed}>
          <img className={styles.logo} src="/mlsclogo.png" alt="MLSC Logo" />
          {/* <img className={styles.menu} src="/Sponsors/menu.png" alt="Menu" /> */}
          <img className={styles.AnyaF} src="/Sponsors/AnyaF.png" alt="Shh" />

            <AnimatePresence mode="wait">
              <motion.div
                key={getComponent()?.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {getComponent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sponsors;