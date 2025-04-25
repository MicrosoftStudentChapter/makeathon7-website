import React, { useState, useEffect } from "react";
import styles from "../styles/AboutUs.module.css";
import logo from "/mlsclogo.png";
import first_prize from "/AboutUs/images/first_prize.png";
import second_prize from "/AboutUs/images/second_prize.png";
import third_prize from "/AboutUs/images/third_prize.png";

import Footer from "../components/Footer/Footer";

// const BurgerAndNavPortion = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNav = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   return (
//     <>
//       <div
//         className={`${styles.extension} ${isOpen ? styles.leftToRight : ""}`}
//         id="extension"
//       >
//         <div className={styles.navLink}>
//           <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
//             Home
//           </a>
//         </div>
//         <div className={styles.navLink}>
//           <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
//             About
//           </a>
//         </div>
//         <div className={styles.navLink}>
//           <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
//             Tracks
//           </a>
//         </div>
//         <div className={styles.navLink}>
//           <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
//             Timeline
//           </a>
//         </div>
//         <div className={styles.navLink}>
//           <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
//             Sponsors
//           </a>
//         </div>
//       </div>

//       <div className={styles.rightSide}>
//         <div
//           className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""
//             }`}
//           onClick={toggleNav}
//         >
//           <div
//             className={`${styles.line} ${isOpen ? styles.disappear : ""}`}
//             id="firstLine"
//           ></div>
//           <div
//             className={`${styles.line} ${styles.absolute} ${isOpen ? styles.disappear : ""
//               }`}
//             id="secondLine"
//           ></div>
//           <div
//             className={`${styles.line} ${styles.absolute} ${isOpen ? styles.tiltLeft : ""
//               }`}
//             id="thirdLine"
//           ></div>
//           <div
//             className={`${styles.line} ${styles.absolute} ${isOpen ? styles.tiltRight : ""
//               }`}
//             id="fourLine"
//           ></div>
//           <div
//             className={`${styles.line} ${isOpen ? styles.disappear : ""}`}
//             id="fifthLine"
//           ></div>
//         </div>
//       </div>
//     </>
//   );
// };

function HeaderPortion() {
  return (
    <>
      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <a href="https://makeathon7.mlsctiet.com" rel="noopener noreferrer">
          <img src={logo} alt="MLSC Logo" className={styles.mlscLogo} />
          </a>
        </div>

        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.casinoFont}>ABOUT US</h1>
          <p>
            The Microsoft Learn Student Chapter (MLSC) at Thapar Institute of
            Engineering and Technology, Patiala, stands as a beacon of technical
            excellence. With a dedicated team of mentors and enthusiasts, MLSC
            fosters an environment of collaboration and learning, where students
            can engage in projects, competitions, and networking events. As a
            vibrant society, it fosters an environment where students can delve
            into the realm of technology with zeal and innovation.
          </p>
          <p>
            MLSC is poised to showcase its prowess through its upcoming mega
            flagship event, Makeathon7, slated for the end of February. This
            eagerly anticipated event promises to be a showcase of ingenuity,
            where students will come together to ideate, innovate, and create
            solutions to real-world problems, cementing MLSC's reputation as a
            hub for budding technocrats and visionaries.
          </p>
        </div>
      </div>
    </>
  );
}

function PrizeContainer({ img, alt, imgClass, text, prize }) {
  const [showingSide, setShowingSide] = useState("front");
  let frontImageClass =
    imgClass + (showingSide === "back" ? " " + styles.onClickFrontImage : "");
  let backImageClass =
    imgClass + (showingSide === "back" ? " " + styles.onClickBackImage : "");
  return (
    <span
      className={styles.prizeContainerParent}
      onClick={() => {
        setShowingSide(showingSide === "front" ? "back" : "front");
        console.log("works");
      }}
    >
      <span
        className={
          styles.prizeContainer +
          (showingSide === "back" ? " " + styles.prizeContainerBack : "")
        }
      >
        <img src={img} alt={alt} className={frontImageClass} />
        <span className={styles.prizeShow}>
          <h3 className={styles.prizeTextHeading}>{text}</h3>
          <h5 className={styles.prizeTextDescription}>INR {prize}</h5>
          <img
            src={img}
            alt={alt}
            className={styles.prizeShowImage + " " + backImageClass}
          />
        </span>
      </span>
    </span>
  );
}

function RewardsSection() {
  return (
    <>
      <div className={styles.mainContent}>
        <h2 className={styles.subheading + " " + styles.casinoFont}>REWARDS</h2>
        <div className={styles.prizesContainer}>
          <PrizeContainer
            img={second_prize}
            alt="second_prize"
            imgClass={styles.prizeImage + " " + styles.secondPrize}
            text="Second Prize"
            prize="20,000"
          />
          <PrizeContainer
            img={first_prize}
            alt="first_prize"
            imgClass={styles.prizeImage + " " + styles.firstPrize}
            text="First Prize"
            prize="30,000"
          />
          <PrizeContainer
            img={third_prize}
            alt="third_prize"
            imgClass={styles.prizeImage + " " + styles.thirdPrize}
            text="Third Prize"
            prize="10,000"
          />
        </div>
      </div>
    </>
  );
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Makeathon?",
      answer:
        "MAKEATHON is one of the premier Hackathons in India, where 1500+ students of different skill levels come together from around India to experiment and create unique software or hardware projects from scratch. This 24 hour hackathon is filled with development, mentoring, fun and a night worth remembering.",
    },
    {
      question: "Can beginners participate in MAKEATHON?",
      answer:
        "Yes. Participants for MAKEATHON are mostly first and second-year students. If a student is willing to learn and bring creative ideas to the table, then MAKEATHON is just the place for them!",
    },
    {
      question: "Is coding necessary for MAKEATHON?",
      answer:
        "No. It is a myth that coding is necessary for hackathons. MAKEATHON acts as a platform for similar minds to come together and execute new ideas.",
    },
    {
      question: "What is the registration fee for MAKEATHON?",
      answer:
        "Participation in MAKEATHON is free. There are no registration or participation fees.",
    },
    {
      question: "Is a team required for participation?",
      answer:
        "Yes. A team shall have a minimum of 3 members to a maximum of 5 members.",
    },
    {
      question: "What is mode of hack?",
      answer:
        "MAKEATHON will be a hybrid event i.e. it will be conducted both offline and online",
    },
    {
      question: "What if I have never been to a hackathon before?",
      answer:
        "MAKEATHON welcomes students of all skill levels. We will have talks, mentors, and workshops to help you with your project. Just be eager to learn and excited to meet lots of awesome people.",
    },
    {
      question: "Can NON-TIET students participate in Makeathon?",
      answer:
        "Yes. MAKEATHON7 is open to students from other institutions as well. They can join us on campus for the offline hackathon",
    },
    {
      question: "How can we choose our teammates?",
      answer:
        "There is no restriction on the formation of the team. Participants can make teams irrespective of their institutions.",
    },
    {
      question: "What kind of workshops and activities will be there?",
      answer:
        "Previously, we have  held workshops and talks for a range of skill levels, from beginner to advanced, including an introduction to React. Other workshops also explore various programming tools such as APIs, databases, and platforms. Whether it is for relaxation or health, novelty or competition, our team has something exciting prepared for you to enjoy.",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "The judging criteria involve concept, design, development, and presentation. A panel of judges will score the teams based on the criteria above, which would further determine the ranking of each team.",
    },
    {
      question: "Will there be refreshments?",
      answer: "Yes, food and beverages will be provided throughout the event.",
    },
    {
      question: "Will there be a bootcamp?",
      answer:
        "Yes! A week-long MLSC BootCamp marks the beginning of the MAKEATHON7 starting on 19th February. You must register for the bootcamp separately.",
    },
    {
      question: "Will there be prizes?",
      answer:
        "Yes! The best performing participants will win exciting prizes. More information on the prizes is available at the MAKEATHON7 official website and MLSC social media handles.",
    },
    {
      question: "Will there be mentors?",
      answer:
        "Yes! You can interact with the mentors regarding any problem you might face during the hacking period.",
    },
    {
      question: "Do all team members need to be present in person?",
      answer:
        "Yes, every team member should be present during various checkpoints. Since MAKEATHON7 is a HYBRID hackathon, every team member must be present in person if the team is offline or on the discord channel if the team is participating in online mode.",
    },
    {
      question: "Will Wi-Fi be available?",
      answer:
        "Yes! Wi-Fi will be provided at the venue for all offline mode participants.",
    },
    {
      question: "Who will be part of the judging panel?",
      answer:
        "The judging panel composition will be announced closer to the date of the hackathon.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.box}>
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={activeIndex === index}
          onClick={() => toggleFaq(index)}
        />
      ))}
    </div>
  );
};

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`${styles.faq} ${isOpen ? styles.activeFaq : ""}`}
      onClick={onClick}
    >
      <div className={styles.ques}>
        <h4>{question}</h4>
        <i
          className={`fa-solid fa-chevron-down ${isOpen ? styles.active : ""}`}
        ></i>
      </div>
      <div
        className={styles.ans}
        style={{
          maxHeight: isOpen ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s ease",
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Executive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    {
      id: 1,
      src: "/AboutUs/EBImages/tanmay.png",
      name: "TANMAY MANN",
      role: "GENERAL SECRETARY",
      code: "AGENT MANN",
    },
    {
      id: 2,
      src: "/AboutUs/EBImages/mankirat.png",
      name: "MANKIRAT SINGH",
      role: "TECHNICAL HEAD",
      code: "AGENT SINGH",
    },

    {
      id: 3,
      src: "/AboutUs/EBImages/vanika.png",
      name: "VANIKA SAHNI",
      role: "CONTENT HEAD",
      code: "AGENT SAHNI",
    },
    {
      id: 4,
      src: "/AboutUs/EBImages/agrim.png",
      name: "AGRIM GOYAL",
      role: "FINANCE SECRETARY",
      code: "AGENT GOYAL",
    },
    {
      id: 5,
      src: "/AboutUs/EBImages/ananay.png",
      name: "ANANAY RAMPAL",
      role: "EM & LOGISTICS HEAD",
      code: "AGENT RAMPAL",
    },
    {
      id: 6,
      src: "/AboutUs/EBImages/prisha.png",
      name: "PRISHA KANDHARI",
      role: "JOINT SECRETARY",
      code: "AGENT KANDHARI",
    },

    {
      id: 7,
      src: "/AboutUs/EBImages/preksha.png",
      name: "PREKSHA JAIN",
      role: "JOINT SECRETARY",
      code: "AGENT JAIN",
    },

    {
      id: 8,
      src: "/AboutUs/EBImages/palakpreet.png",
      name: "PALAKPREET KAUR",
      role: "MARKETING HEAD",
      code: "AGENT KAUR",
    },

    {
      id: 9,
      src: "/AboutUs/EBImages/navdeep.png",
      name: "NAVDEEP SINGH SIDHU",
      role: "TECHNICAL HEAD",
      code: "AGENT SIDHU",
    },
    {
      id: 10,
      src: "/AboutUs/EBImages/krishnam.png",
      name: "KRISHNAM AGGARWAL",
      role: "DESIGNING HEAD",
      code: "AGENT AGGARWAL",
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 1500); //1.5sec per slide

    return () => clearInterval(interval);
  }, [isAnimating, isPaused]);

  const nextSlide = () => {
    setIsAnimating(true);
    setDirection("next");

    setTimeout(() => {
      setCurrentIndex((oldIndex) => {
        let newIndex;
        if (oldIndex === images.length - 1) {
          newIndex = 0;
        } else {
          newIndex = oldIndex + 1;
        }
        return newIndex;
      });
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>EXECUTIVE BOARD</h2>
      <div className={styles.carouselWrapper}>
        <div className={styles.slidesContainer}>
          {/* Previous Image (Angled) */}
          <div
            className={`${styles.slide} ${styles.prevSlide} ${
              isAnimating && direction === "prev" ? styles.movePrevToCenter : ""
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={styles.imageCard}>
              <img
                src={
                  images[(currentIndex - 1 + images.length) % images.length].src
                }
                alt="Previous board member"
              />
              <div className={styles.cardInfo}>
                <h2>
                  {
                    images[(currentIndex - 1 + images.length) % images.length]
                      .name
                  }
                </h2>
                <div className={styles.line}></div>
                <p>
                  {
                    images[(currentIndex - 1 + images.length) % images.length]
                      .role
                  }
                </p>
                <p className={styles.agentCode}>
                  {
                    images[(currentIndex - 1 + images.length) % images.length]
                      .code
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Current Image (Center)*/}
          <div
            className={`${styles.slide} ${styles.currentSlide} ${
              isAnimating
                ? direction === "next"
                  ? styles.moveCurrentToLeft
                  : styles.moveCurrentToRight
                : ""
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={styles.imageCard}>
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].name}
              />
              <div className={styles.cardInfo}>
                <h2>{images[currentIndex].name}</h2>
                <div className={styles.line}></div>
                <p>{images[currentIndex].role}</p>
                <p className={styles.agentCode}>{images[currentIndex].code}</p>
              </div>
            </div>
          </div>

          {/* Next Image (Angled) */}
          <div
            className={`${styles.slide} ${styles.nextSlide} ${
              isAnimating && direction === "next" ? styles.moveNextToCenter : ""
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={styles.imageCard}>
              <img
                src={images[(currentIndex + 1) % images.length].src}
                alt="Next board member"
              />
              <div className={styles.cardInfo}>
                <h2>{images[(currentIndex + 1) % images.length].name}</h2>
                <div className={styles.line}></div>
                <p>{images[(currentIndex + 1) % images.length].role}</p>
                <p className={styles.agentCode}>
                  {images[(currentIndex + 1) % images.length].code}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next to Next slide */}
        <div
          className={`${styles.slide} ${styles.nextNextSlide} ${
            isAnimating && direction === "next" ? styles.move2 : ""
          }`}
        >
          <div className={styles.imageCard}>
            <img
              src={images[(currentIndex + 2) % images.length].src}
              alt="Next board member"
            />
            <div className={styles.cardInfo}>
              <h2>{images[(currentIndex + 2) % images.length].name}</h2>
              <div className={styles.line}></div>
              <p className={styles.job}>
                {images[(currentIndex + 2) % images.length].role}
              </p>
              <p className={styles.agentCode}>
                {images[(currentIndex + 2) % images.length].code}
              </p>
            </div>
          </div>
        </div>

        {/* Previous to prev slide */}
        <div
          className={`${styles.slide} ${styles.prevPrevSlide} ${
            isAnimating && direction === "prev" ? styles.move3 : ""
          }`}
        >
          <div className={styles.imageCard}>
            <img
              src={
                images[(currentIndex - 2 + images.length) % images.length].src
              }
              alt="Next board member"
            />
            <div className={styles.cardInfo}>
              <h2>
                {
                  images[(currentIndex - 2 + images.length) % images.length]
                    .name
                }
              </h2>
              <div className={styles.line}></div>
              <p>
                {
                  images[(currentIndex - 2 + images.length) % images.length]
                    .role
                }
              </p>
              <p className={styles.agentCode}>
                {
                  images[(currentIndex - 2 + images.length) % images.length]
                    .code
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MLSCCarousel = () => {
  const [animationState, setAnimationState] = useState("playing");
  return (
    <div className={styles.footerBody}>
      <div className={styles.carousel}>
        <div className={styles.carouselLabel}>MADE WITH ❤️ BY MLSC</div>
        <div
          className={
            styles.carouselSlide +
            (animationState === "paused"
              ? " " + styles.carouselSlidePaused
              : "")
          }
          onClick={() => {
            setAnimationState(
              animationState === "playing" ? "paused" : "playing"
            );
            console.log("works");
          }}
        >
          <img src="/AboutUs/carouselImages/member1.png" alt="Member 1" />
          <img src="/AboutUs/carouselImages/member2.png" alt="Member 2" />
          <img src="/AboutUs/carouselImages/member3.png" alt="Member 3" />
          <img src="/AboutUs/carouselImages/member4.png" alt="Member 4" />
          <img src="/AboutUs/carouselImages/member5.png" alt="Member 5" />
          <img src="/AboutUs/carouselImages/member6.png" alt="Member 6" />
          <img src="/AboutUs/carouselImages/member7.png" alt="Member 7" />
          <img src="/AboutUs/carouselImages/member8.png" alt="Member 8" />
          <img src="/AboutUs/carouselImages/member9.png" alt="Member 9" />
          <img src="/AboutUs/carouselImages/member10.png" alt="Member 10" />
          <img src="/AboutUs/carouselImages/member11.png" alt="Member 11" />
          <img src="/AboutUs/carouselImages/member12.png" alt="Member 12" />
          <img src="/AboutUs/carouselImages/member13.png" alt="Member 13" />
          <img src="/AboutUs/carouselImages/member14.png" alt="Member 14" />
          <img src="/AboutUs/carouselImages/member15.png" alt="Member 15" />
          <img src="/AboutUs/carouselImages/member16.png" alt="Member 16" />
          <img src="/AboutUs/carouselImages/member17.png" alt="Member 17" />
          <img src="/AboutUs/carouselImages/member18.png" alt="Member 18" />
          <img src="/AboutUs/carouselImages/member19.png" alt="Member 19" />
          <img
            src="/AboutUs/carouselImages/member1.png"
            alt="Member 1 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member2.png"
            alt="Member 2 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member3.png"
            alt="Member 3 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member4.png"
            alt="Member 4 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member5.png"
            alt="Member 5 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member6.png"
            alt="Member 6 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member7.png"
            alt="Member 7 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member8.png"
            alt="Member 8 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member9.png"
            alt="Member 9 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member10.png"
            alt="Member 10 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member11.png"
            alt="Member 11 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member12.png"
            alt="Member 12 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member13.png"
            alt="Member 13 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member14.png"
            alt="Member 14 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member15.png"
            alt="Member 15 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member16.png"
            alt="Member 16 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member17.png"
            alt="Member 17 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member18.png"
            alt="Member 18 Duplicate"
          />
          <img
            src="/AboutUs/carouselImages/member19.png"
            alt="Member 19 Duplicate"
          />
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.backgroundImage} />
      <div className={styles.BlackOverlay} />
      <div className={styles.contentWrapper}>
        <div className={styles.xhidden}>
          {/* <BurgerAndNavPortion /> */}
          <HeaderPortion />
          {/* <PrizeContainer /> */}
          <RewardsSection />
          <Faq />
          <Executive />
          <MLSCCarousel />
        </div>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
