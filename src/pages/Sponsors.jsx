import React, { useState, useEffect } from "react";
import styles from "../styles/Sponsors.module.css";
import { useNavigate } from "react-router-dom";

const sponsorData = [
  {
    left: {
      heading: "TITLE SPONSORS",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677656/Devfolio_-_Normal_akosq5.svg", name: "Devfolio", link: "https://devfolio.co" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745685554/66273f100889f2489acb2d8e_Polygon_Logo_Complete_White_iobqqa.webp", name: "Polygon", link: "https://polygon.technology" },
      ],
    },
    right: {
      heading: "",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677657/download_l9guqb.png", name: "Pokerbaazi", link: "https://www.pokerbaazi.com" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745685668/362c3520-7a65-49ba-9ee3-8ba55f0a0ebf.png", name: "ETH India", link: "https://ethindia.co" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745685868/merchant-173620-661e69bc6b102_nyaptv.png", name: "Burgrill", link: "https://burgrill.com" },
      ],
    },
  },
  {
    left: {
      heading: "POWER SPONSORS",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/images_ux2yyo.png", name: "Tim Hortons", link: "https://timhortons.in" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/easemytrip-logo-png_seeklogo-517976_hnrhqg.png", name: "Ease My Trip", link: "https://www.easemytrip.com" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677657/youth-cave-bhupindra-nagar-patiala-game-dealers-u10gg5x9ec_vksuhe.png", name: "Youthcave", link: "https://youthcave.in" },
      ],
    },
    right: {
      heading: "",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/unnamed_olifwb.png", name: "Stockedge", link: "https://stockedge.com" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677656/316dozfBqtL_pjxytn.jpg", name: "The Product Folks", link: "https://theproductfolks.com" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745686056/stockgrow.PR__idvwns.png", name: "Stockgrow", link: "https://stockgrow.in" },
      ],
    },
  },
  {
    left: {
      heading: "ASSOCIATE SPONSORS",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/473795101_973506514670007_8819073914586084454_n_blvcaa.jpg", name: "Olivia", link: "https://olivia.in" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/daaura_qcprsz.png", name: "Da Aura", link: "https://daaura.com" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745686327/IBlogo_light_geqi9a.png", name: "Interview Buddy", link: "https://interviewbuddy.in" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677663/punjab_x54ord.png", name: "Punjab Buggy", link: "https://punjabbuggy.com" },
      ],
    },
    right: {
      heading: "",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745862640/Screenshot_2025-04-28_232023_zg7b6a.png", name: "Southall", link: "https://southallrestaurant.com" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/Untitled-9-1536x642_gsumr9.jpg", name: "Polo Immigration", link: "https://poloimmigration.com" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677663/images_gf3dcg.jpg", name: "Event Beep", link: "https://eventbeep.com" },
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677662/navan_ai_logo_b4p851.jpg", name: "Navan.ai", link: "https://navan.ai" },
      ],
    },
  },
  {
    left: {
      heading: "ASSESSMENT PARTNER",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/cropped-Frame_48096440-removebg-preview_ey5shu.png", name: "Languify", link: "https://languify.com" },
      ],
    },
    right: {
      heading: "MEDIA PARTNER",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/20812_46edd5de33a84cc460a24c687530bfd3516ef0c5_campus-karma_l_jgomqe.webp", name: "Campus Karma", link: "https://campuskarma.in" },
      ],
    },
  },
  {
    left: {
      heading: "BEVERAGE PARTNER",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/187137_21acb0df55b84b2eb4afaf87a56b8b1e_mv2_nzyvsh.png", name: "Polka Pop", link: "https://polkapop.in" },
      ],
    },
    right: {
      heading: "CERTIFICATE PARTNER",
      slots: [
        { logo: "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/GMCLogSq-1645772212846_jtnxjg.avif", name: "Get My Certificate", link: "https://getmycertificate.com" },
      ],
    },
  },
];

export default function SponsorsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 913) {
      navigate('/msponsors', { replace: true });
    }
  }, [navigate]);


  const [page, setPage] = useState(0); // 0 = cover, 1 = title, etc.
  const [isFading, setIsFading] = useState(false);

  // Animation handler
  const animateToPage = (newPage) => {
    setIsFading(true);
    setTimeout(() => {
      setPage(newPage);
      setIsFading(false);
    }, 400); // Match the CSS transition duration
  };

  // Cover page
  if (page === 0) {
    return (
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundImage: 'url(https://res.cloudinary.com/dljpfochn/image/upload/v1745682012/Desktop_-_49_idmecc.png)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={`${styles.fadeContainer} ${isFading ? styles.fadeOut : styles.fadeIn}`}
      >
        <button
          className={styles.arrow}
          style={{ position: "absolute", right: 40, bottom: 40 }}
          onClick={() => animateToPage(1)}
          disabled={isFading}
        >
          &#8594;
        </button>
      </div>
    );
  }

  // Sponsor navigation pages
  return (
    <div className={styles.gradientBg}>
      <div className={styles.container}>
        <button
          className={styles.arrow}
          onClick={() => animateToPage(page - 1)}
          disabled={page === 0 || isFading}
        >
          &#8592;
        </button>
        <div className={`${styles.filePages} ${styles.fadeContainer} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
          {/* Left Page */}
          <div
            className={styles.pageLeft}
            style={{
              backgroundImage: 'url("/file_left2.png")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className={styles.pageContent}>
              <h2 className={styles.heading}>
                {sponsorData[page - 1]?.left.heading}
              </h2>
              <div className={styles.logoGrid}>
                {sponsorData[page - 1]?.left.slots.map((slot, idx) => (
                  <div key={idx} className={styles.logoSlot}>
                    <div className={styles.logoSquare}>
                      {slot.logo && (
                        <a href={slot.link} target="_blank" rel="noopener noreferrer">
                          <img
                            src={slot.logo}
                            alt={slot.name}
                            className={styles.logoImage}
                          />
                        </a>
                      )}
                    </div>
                    <div className={styles.companyName}>
                      <a href={slot.link} target="_blank" rel="noopener noreferrer">
                        {slot.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Page */}
          <div
            className={styles.pageRight}
            style={{
              backgroundImage: 'url("/file_right2.png")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className={styles.pageContent}>
              <h2 className={styles.heading}>
                {sponsorData[page - 1]?.right.heading}
              </h2>
              <div className={styles.logoGrid}>
                {sponsorData[page - 1]?.right.slots.map((slot, idx) => (
                  <div key={idx} className={styles.logoSlot}>
                    <div className={styles.logoSquare}>
                      {slot.logo && (
                        <a href={slot.link} target="_blank" rel="noopener noreferrer">
                          <img
                            src={slot.logo}
                            alt={slot.name}
                            className={styles.logoImage}
                          />
                        </a>
                      )}
                    </div>
                    <div className={styles.companyName}>
                      <a href={slot.link} target="_blank" rel="noopener noreferrer">
                        {slot.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          className={styles.arrow}
          onClick={() => animateToPage(page + 1)}
          disabled={page === 5 || isFading}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}