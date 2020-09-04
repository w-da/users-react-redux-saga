import React from 'react';

import styles from './Tabs.module.scss';

export const Tabs = ({ onChangeUsersDisplay, disabled }) => {
  return (
    <div>
      <button
        onClick={() => onChangeUsersDisplay()}
        type="button"
        disabled={disabled}
        className={styles.tab}
      >
        Users
      </button>
      <button
        onClick={() => onChangeUsersDisplay()}
        type="button"
        disabled={!disabled}
        className={styles.tab}
      >
        Marked users
      </button>
    </div>
  );
};
