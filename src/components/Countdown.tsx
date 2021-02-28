import { render } from 'react-dom';
import styles from '../styles/components/Countdown.module.css';

export default function Countdown() {
  return(
    <div className={styles.countdownContainer}>
      <div>
        <span>08</span>
        <span>days</span>
      </div>

      <div>
        <span>23</span>
        <span>hours</span>
      </div>
      
      <div>
        <span>55</span>
        <span>minutes</span>
      </div>
      
      <div>
        <span>41</span>
        <span>seconds</span>
      </div>
    </div>
  )
}