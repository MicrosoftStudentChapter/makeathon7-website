import React, { useState, useEffect } from "react";
import styles from "../styles/MSponsors.module.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sponsorsData = [
  {
    title: "Top Secret",
    logos: [],
  },
  {
    title: "Title Sponsors",
    logos: [
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677656/Devfolio_-_Normal_akosq5.svg",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745685554/66273f100889f2489acb2d8e_Polygon_Logo_Complete_White_iobqqa.webp",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677657/download_l9guqb.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745685668/362c3520-7a65-49ba-9ee3-8ba55f0a0ebf.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745685868/merchant-173620-661e69bc6b102_nyaptv.png",
    ],
  },
  {
    title: "Power Sponsors",
    logos: [
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/images_ux2yyo.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/easemytrip-logo-png_seeklogo-517976_hnrhqg.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677657/youth-cave-bhupindra-nagar-patiala-game-dealers-u10gg5x9ec_vksuhe.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/unnamed_olifwb.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677656/316dozfBqtL_pjxytn.jpg",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745686056/stockgrow.PR__idvwns.png",
    ],
  },
  {
    title: "Associate Sponsors",
    logos: [
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/473795101_973506514670007_8819073914586084454_n_blvcaa.jpg",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/daaura_qcprsz.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745686327/IBlogo_light_geqi9a.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677663/punjab_x54ord.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745862640/Screenshot_2025-04-28_232023_zg7b6a.png",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/Untitled-9-1536x642_gsumr9.jpg",
    ],
  },
  {
    title: "Associate Sponsors",
    logos: [
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677663/images_gf3dcg.jpg",
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677662/navan_ai_logo_b4p851.jpg",
    ],
  },
  {
    title: "Assessment Partner",
    logos: [
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/cropped-Frame_48096440-removebg-preview_ey5shu.png",
    ],
  },
  {
    title: "Media Partner",
    logos: [
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/20812_46edd5de33a84cc460a24c687530bfd3516ef0c5_campus-karma_l_jgomqe.webp",
    ],
  },
  {
    title: "Beverage Partner",
    logos: [
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677658/187137_21acb0df55b84b2eb4afaf87a56b8b1e_mv2_nzyvsh.png",
    ],
  },
  {
    title: "Certificate Partner",
    logos: [
      "https://res.cloudinary.com/dljpfochn/image/upload/v1745677659/GMCLogSq-1645772212846_jtnxjg.avif",
    ],
  },
];

export default function MSponsors() {
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goRight = () => {
    if (index < sponsorsData.length - 1) {
      setIndex(index + 1);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth > 912) {
      navigate("/sponsors");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />

      <div className={styles.fileWrapper}>
        <img
          src="https://res.cloudinary.com/dljpfochn/image/upload/v1745646569/localhost_5173_sponsors_cknkoi.png"
          alt="File"
          className={styles.fileImage}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className={styles.textContent}
          >
            {index === 0 ? (
              <div className={styles.centerText}>SPONSORS</div>
            ) : (
              <>
                <h2 className={styles.title}>{sponsorsData[index].title}</h2>
                <div className={styles.logoGrid}>
                  {sponsorsData[index].logos.map((logo, i) => (
                    typeof logo === "string" && logo.startsWith("http") ? (
                      <img key={i} src={logo} alt="sponsor" className={styles.logo} />
                    ) : (
                      <div key={i} className={styles.textLogo}>{logo}</div> // for "South Hall" text logo
                    )
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.navigation}>
        <button
          onClick={goLeft}
          disabled={index === 0}
          className={styles.navButton}
        >
          <ChevronLeft size={36} color={index === 0 ? "gray" : "white"} />
        </button>

        <button
          onClick={goRight}
          disabled={index === sponsorsData.length - 1}
          className={styles.navButton}
        >
          <ChevronRight
            size={36}
            color={index === sponsorsData.length - 1 ? "gray" : "white"}
          />
        </button>
      </div>
    </div>
  );
}
