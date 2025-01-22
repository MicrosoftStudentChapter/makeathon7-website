import React, { useState, useEffect } from 'react';
import styles from '../styles/Sponsors.module.css';
import PagesT from '../components/SponsorsPageInside/PagesT.jsx';
import PagesP from '../components/SponsorsPageInside/PagesP.jsx';
import PagesA from '../components/SponsorsPageInside/PagesA.jsx';
import ClosedFile from '../components/Sponsors/closedfile/ClosedFile.jsx';
import MobileView from '../components/Sponsors/MobileView/MobileView.jsx';

const Sponsors = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let content;
  if (scrollPosition > 800) {
    content = <PagesA />;
  } else if (scrollPosition > 600) {
    content = <MobileView />;
  } else if (scrollPosition > 400) {
    content = <PagesP />;
  } else if (scrollPosition > 200) {
    content = <PagesT />;
  } else {
    content = <ClosedFile />;
  }

  return (
    <>
      <div className={`${styles.wrapper} ${scrollPosition > 200 ? styles.scrolled : ''}`}>
        <div className={styles.container}>  

          <div className={styles.AbsoluteFixed}>
            <img className={styles.logo} src="/mlsclogo.png" alt="MLSC Logo" />
            <img className={styles.menu} src="/Sponsors/menu.png" alt="Menu" />
            <div className={styles.fade}>{content}</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sponsors;