import React from 'react'
import styles from '../../styles/Timeline.module.css'
import eventsdata from '../../data/eventsdata.json'
import { useState } from 'react';
function Eventcard  ({name}) {
    const card= eventsdata.find(card => card.id === name);
    const [Animation, setAnimation] = useState({card1: false, card2: false, card3: false});

    const animate = (cardNo) => {
        setAnimation(prevState => {
            let newState = {...prevState};
            if (newState[cardNo] == false) {
                newState[cardNo] = true;
            } else {
                newState[cardNo] = false;
            }
            return newState;
        })
    }

    return (
        <div className={styles.background}>
            <div onClick={() => animate("card1")} className={`${styles.selectCards} ${styles.card1} ${Animation.card1 ? styles.card1Ani : ''}`}></div>
            <div onClick={() => animate("card2")} className={`${styles.selectCards} ${styles.card2} ${Animation.card2 ? styles.card2Ani : ''}`}></div>
            <div onClick={() => animate("card3")} className={`${styles.selectCards} ${styles.card3} ${Animation.card3 ? styles.card3Ani : ''}`}></div>
        
            <div className={styles.timeline}>
                <p>EVENT: {card.id}</p>
                <br />
                <p>DATE: {card.date}</p>
                <p>TIME: {card.time}</p>
                <p>VENUE: {card.venue}</p>
                <br />
                <p className={styles.description}>{card.description}</p>
            </div>
        </div> 
    )
}
export default Eventcard