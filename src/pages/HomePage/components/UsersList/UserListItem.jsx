import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateUser } from '../../../../redux/users/userActions';
import { getCurrentTime } from './helpers/getCurrentTime';

import styles from './UsersList.module.scss';

export const UserListItem = ({ user, location }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.usersList__item}>
      <button
        className={styles.usersList__markBtn}
        type="button"
        title="Mark user"
        onClick={() => dispatch(updateUser(user.id.value, getCurrentTime()))}
        disabled={user.markedTime}
      >
        &#10003;
      </button>
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
