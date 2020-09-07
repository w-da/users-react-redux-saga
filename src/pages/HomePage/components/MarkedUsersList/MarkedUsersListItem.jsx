import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../UsersList/UsersList.module.scss';

export const MarkedUsersListItem = ({ user, location }) => {
  return (
    <li className={styles.usersList__item}>
      <Link
        to={{
          pathname: `/user/${user.id.value}`,
          state: {
            from: location,
          },
        }}
        className={styles.usersList__link}
      >
        <div className={styles.usersList__imgMarkWrapper}>
          <div className={styles.usersList__imgBox}>
            <img
              src={user.picture.thumbnail}
              alt={user.picture.thumbnail}
              className={styles.usersList__img}
            />
          </div>
          <div>{user.markedTime && user.markedTime}</div>
        </div>
        <div className={styles.usersList__infoBox}>
          <p className={styles.usersList__info}>{user.name.first}</p>
          <p className={styles.usersList__info}>{user.name.last}</p>
          <p className={styles.usersList__info}>ID: {user.id.value}</p>
        </div>
      </Link>
    </li>
  );
};
