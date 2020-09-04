import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__info}>I'm sticky footer</p>
    </footer>
  );
};
