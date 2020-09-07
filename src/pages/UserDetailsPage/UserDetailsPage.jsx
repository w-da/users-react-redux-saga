import React from 'react';
import { useHistory } from 'react-router-dom';

import { normalizeDate } from './helpers/normalizeDate';
import styles from './UserDetailsPage.module.scss';

export const UserDetailsPage = ({ user, location }) => {
  const history = useHistory();

  function goBackHandler() {
    const prevLocationState = location.state;

    if (!prevLocationState) {
      history.push('/');
      return;
    }

    history.push(prevLocationState.from);
  }

  return (
    <section className={styles.details}>
      <button
        type="button"
        className={styles.details__backBtn}
        onClick={goBackHandler}
      >
        &#10232;
      </button>
      <h2 className={styles.details__title}>User Details</h2>
      <div className={styles.details__container}>
        <div className={styles.details__infoBox}>
          <p className={styles.details__info}>
            Country:{' '}
            <span className={styles.details__info_bold}>
              {user.location.country}
            </span>
          </p>
          <p className={styles.details__info}>
            City:{' '}
            <span className={styles.details__info_bold}>
              {user.location.city}
            </span>
          </p>
          <p className={styles.details__info}>
            Street:{' '}
            <span className={styles.details__info_bold}>
              {user.location.street.name}
            </span>
          </p>
          <p className={styles.details__info}>
            Email:{' '}
            <span className={styles.details__info_bold}>{user.email}</span>
          </p>
          <p className={styles.details__info}>
            Gender:{' '}
            <span className={styles.details__info_bold}>{user.gender}</span>
          </p>
          <p className={styles.details__info}>
            Date of Birth:{' '}
            <span className={styles.details__info_bold}>
              {normalizeDate(user.dob.date)}
            </span>
          </p>
          <p className={styles.details__info}>
            Phone:{' '}
            <span className={styles.details__info_bold}>{user.phone}</span>
          </p>
        </div>
        <div className={styles.details__imgBox}>
          <img
            src={user.picture.large}
            alt={user.name.first}
            className={styles.details__img}
          />
        </div>
      </div>
    </section>
  );
};
