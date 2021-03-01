import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

function calculateTimeLeft() {
  const difference = +new Date('2021,06,21 23:59:59') - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

export default function Countdown() {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
 
   return(
    <div className={styles.countdownContainer}>
      <div>
         <span>{timeLeft['days']}</span>
        <span>days</span>
      </div>

      <div>
         <span>{timeLeft['hours']}</span>
        <span>hours</span>
      </div>
      
      <div>
         <span>{timeLeft['minutes']}</span>
        <span>minutes</span>
      </div>
      
      <div>
         <span>{timeLeft['seconds']}</span>
        <span>seconds</span>
      </div>
    </div>
  )
}