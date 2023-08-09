import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  positivePercentage,
  total,
  good,
  neutral,
  bad,
}) => {
  return (
    <div className={styles.statistics}>
      <h3 className={styles.statisticsTitle}>Statistics</h3>
      <ul className={styles.statisticsList}>
        <li className={styles.statisticsListItem}>Good: {good}</li>
        <li className={styles.statisticsListItem}>Neutral: {neutral}</li>
        <li className={styles.statisticsListItem}>Bad: {bad}</li>
      </ul>
      <p>Total: {total} </p>
      <p className={styles.positivePercentage}>
        Positive feedback: {positivePercentage(total)}%
      </p>
    </div>
  );
};
Statistics.propTypes = {
  positivePercentage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
