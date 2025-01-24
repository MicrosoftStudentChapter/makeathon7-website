import React from "react";
import styles from './Sponsors.module.css';
const Whysus = () => {
  return (
    <>
        <h1 className={styles.SponsorTitle}>Why Sponsor us?</h1>

        <ul>

          <li><p>
            <strong className={styles.SponsorHeadings}>Youth Hub:</strong> The
            Youth Hub Of The Organization Is A Huge Reach, As It Has A Large
            Student Population Of 10000+ People On Campus.
          </p></li>

          <li><p>
            <strong className={styles.SponsorHeadings}>
              Connecting Tech Enthusiasts All Over India:
            </strong>{" "}
            MLSC Is An Open-Source Community That Connects Tech Enthusiasts
            All Across India. Its Discord Server Has A Reach Of Over A
            Thousand People, Which Includes Members From Some Of The Country's
            Most Prominent Educational Institutions Such As IITs And NITs.
          </p></li>

          <li><p>
            <strong className={styles.SponsorHeadings}>
              Flagship Events:
            </strong>{" "}
            MLSC Is Known For Conducting Various Events Throughout The Year,
            Which Are Designed To Reach A Massive Audience. Some Of These
            Being Abhyudaya And Makeathon, Which Are Very Popular Annual
            Events That Have The Potential To Increase The Awareness And Reach
            Of Your Brand.
          </p></li>

          <li><p>
            <strong className={styles.SponsorHeadings}>
              Best Way To Kickstart Your Campaign:
            </strong>{" "}
            Collaborating With MLSC, A Group Of Over A Hundred Individuals Who
            Are Dedicated To Learning All The Traits That Make Up A Successful
            Team Will Help You Organize Various Promotional Events And
            Learning Workshops.
          </p></li>

        </ul>
    </>
  );
};
export default Whysus
