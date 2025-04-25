import styles from './footer.module.css';
import King from './assets/newsec.png';
import Fin from './assets/newsec.png';
import Mail from './assets/mail.png';
import Location from './assets/locate.png';
import LD from './assets/linkedin.png'
import Yt from './assets/yt.png'
import Ig from './assets/insta.png'
import Fb from './assets/fb.png'
import Logo from './assets/Logo.png'
import Sr from './assets/spons.png'
import React from 'react'

const Footer = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.line}></div>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.div}>
              <div className={styles.div2}>
                <img className={styles.sheild} src={Logo} alt="Logo" />
                <div className={styles.div3}>
                  <h2 className={styles.legacy}>Legacy of</h2>
                  <h2 className={styles.innovations}>INNOVATIONS</h2>
                </div>
              </div>
              <div className={styles.socials}>
                <a href='https://www.linkedin.com/company/microsoft-learn-student-chapter' target="_blank" rel="noreferrer">
                  <img className={styles.imager} src={LD} alt="LinkedIn" /> 
                </a>
                <a href='https://www.youtube.com/c/microsoftlearnstudentchaptertietpatiala' target="_blank" rel="noreferrer">
                  <img className={styles.imager} src={Yt} alt="YouTube" /> 
                </a>
                <a href='https://www.facebook.com/mlsctiet' target="_blank" rel="noreferrer">
                  <img className={styles.imager} src={Fb} alt="Facebook" /> 
                </a>
                <a href='https://www.instagram.com/mlsc_tiet/' target="_blank" rel="noreferrer">
                  <img className={styles.imager} src={Ig} alt="Instagram" /> 
                </a>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <h2 className={styles.contact}>CONTACT US</h2>
            <div className={styles.boxer}>
              <div className={styles.rightL}>
                <a href='mailto: msc@thapar.edu' target='_blank' rel="noreferrer" style={{ textDecoration: 'none'}}>
                  <div className={styles.bleh}>
                    <img className={styles.image2} src={Mail} alt="Email" /> 
                    <div className={styles.side}>msc@thapar.edu</div>
                  </div>
                </a>

                <a href='https://goo.gl/maps/bMSfh8uoYCVuLEjD6' target='_blank' rel="noreferrer" style={{ textDecoration: 'none'}}> 
                  <div className={styles.bleh}>
                    <img className={styles.image} src={Location} alt="Location" /> 
                    <div className={styles.side}>TIET Patiala</div>
                  </div>
                </a>

                <a href="/Proposal.pdf" target='_blank' style={{ textDecoration: 'none'}}>
                  <div className={styles.bleh}>
                    <img className={styles.image} src={Sr} alt="Sponsor" /> 
                    <div className={styles.side}>Sponsor Us!</div>
                  </div>
                </a>
              </div>

              <div className={styles.rightR}>
                <a href='https://www.linkedin.com/in/tanmay-mann-9990ba255/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none'}}>
                  <div className={styles.bleh}>
                    <img className={styles.image3} src={King} alt="General Secretary" /> 
                    <div className={styles.side}>Tanmay Mann</div>
                  </div>
                  <span className={styles.gen}>(General Secretary)</span>
                </a>

                <a href='https://www.linkedin.com/in/agrimgoyal/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none'}}>
                  <div className={styles.bleh}>
                    <img className={styles.image3} src={Fin} alt="Finance Secretary" /> 
                    <div className={styles.side}>Agrim Goyal</div>
                  </div>
                  <span className={styles.gen}>(Finance Secretary)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;