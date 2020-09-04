import React from 'react';

import { Clock } from './components/Clock';
import { MarkedUsersQuantity } from './components/MarkedUsersQuantity';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div></div>
      <div className={styles.header__clockUsersBox}>
        <Clock />
        <MarkedUsersQuantity />
      </div>
    </header>
  );
};
