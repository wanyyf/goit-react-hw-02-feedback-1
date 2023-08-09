import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = props => {
  const { onLeaveFeedback, options } = props;
  return (
    <ul className={styles.buttonList}>
      {options.map(button => (
        <li key={button} className={styles.buttonListItem}>
          <button
            className={styles.button}
            onClick={() => onLeaveFeedback(button)}
          >
            {button}
          </button>
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
