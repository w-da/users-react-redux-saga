import React from 'react';

import styles from './ErrorMessage.module.scss';

export const ErrorMessage = () => {
  return (
    <h2 className={styles.errorMessage}>
      Something went wrong, try one more time.
    </h2>
  );
};
