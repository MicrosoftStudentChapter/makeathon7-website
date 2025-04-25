import React from "react";
import styles from "./Card.module.css";

const Card = ({ angle, xOffset, backgroundImage, link }) => {
  // Check if this is the sponsors card
  const isSponsorsCard = link === "/sponsors";
  const isTracksCard = link === "/tracks";
  const isTimelineCard = link === "/timeline";
  return (
    <a
      href={link}
      className={styles.card}
      style={{
        "--angle": angle,
        "--x-offset": xOffset,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {(isSponsorsCard || isTimelineCard) && (
        <div className={styles.comingSoonBanner}>
          <span>Coming Soon</span>
        </div>
      )}
    </a>
  );
};

export default Card;
