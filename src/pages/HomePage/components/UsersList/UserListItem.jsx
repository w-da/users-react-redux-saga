import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UsersList.module.scss';

export const UserListItem = ({ user }) => {
  return (
    <li className={styles.usersList__item}>
      <Link to={`/user/${user.id.value}`} className={styles.usersList__link}>
        <div className={styles.usersList__imgMarkWrapper}>
          <div className={styles.usersList__imgBox}>
            <img
              src={user.picture.thumbnail}
              alt={user.picture.thumbnail}
              className={styles.usersList__img}
            />
          </div>
          <div></div>
          <button type="button" title="Mark user">
            &#10003;
          </button>
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
