import React from 'react';
import styles from './CurrentDetail.module.css';
import { Humidity, Sunrise, Wind } from '../../../icons';
const CurrentDetail = ({ identifier }) => {

  let icon;

  if (identifier === "wind") {
    icon = <Wind className={styles.mr1} />
  }

  if (identifier === "humidity") {
    icon = <Humidity className={styles.mr1} />
  }
  if (identifier === "sunrise") {
    icon = <Sunrise className={styles.mr1} />
  }


  return (
    <div className={styles.detail}>
      {icon}
      <div>
        <small>89 &#37;</small>
        <small>{identifier}</small>
      </div>
    </div>
  );
}

export default CurrentDetail;
