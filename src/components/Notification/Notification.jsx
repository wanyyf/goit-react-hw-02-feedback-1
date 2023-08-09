import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h3 className={styles.notification}>{message}</h3>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
