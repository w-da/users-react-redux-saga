import React from 'react';
import { Link } from 'react-router-dom';

import pageNotFoundImage from '../../assets/images/page-not-found.png';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <section className={styles.notFoundPage}>
      <img src={pageNotFoundImage} alt="page not found" />
      <h1>404 Page not found</h1>
      <Link to="/" className={styles.notFoundPage__link}>
        Get Home
      </Link>
    </section>
  );
};
