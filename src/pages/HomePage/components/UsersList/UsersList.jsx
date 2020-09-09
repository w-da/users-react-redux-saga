import React from 'react';
import { useDispatch } from 'react-redux';

import { getUsers } from '../../../../redux/users/userActions';
import { UserListItem } from './UserListItem';
import { LoadMoreBtn } from './LoadMoreBtn';
import { ErrorMessage } from '../../../../components/ErrorMessage';
import { Loader } from '../../../../components/Loader';

import styles from './UsersList.module.scss';

export const UsersList = ({ location, users, isLoading, hasError, page }) => {
  const dispatch = useDispatch();

  function loadMoreHandler() {
    dispatch(getUsers(page));
  }

  return (
    <div>
      <ul className={styles.usersList}>
        {users.map(user => (
          <UserListItem key={user.id.value} user={user} location={location} />
        ))}
      </ul>
      <LoadMoreBtn onLoadMore={loadMoreHandler} isLoading={isLoading} />
      {isLoading && <Loader />}
      {hasError && <ErrorMessage />}
    </div>
  );
};
