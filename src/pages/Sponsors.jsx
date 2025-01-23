import React, { useState, useEffect } from 'react';
import styles from '../styles/Sponsors.module.css';
import PagesT from '../components/SponsorsPageInside/PagesT.jsx';
import PagesP from '../components/SponsorsPageInside/PagesP.jsx';
import PagesA from '../components/SponsorsPageInside/PagesA.jsx';
import PagesTM from '../components/MobileView/PagesT.jsx';
import PagesPM from '../components/MobileView/PagesP.jsx';
import PagesAM from '../components/MobileView/PagesA.jsx';

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
  if (scrollPosition > 600) {
    content = <PagesAM />;
  } else if (scrollPosition > 400) {
    content = <PagesPM />;
  } else if (scrollPosition > 200) {
    content = <PagesTM />;
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