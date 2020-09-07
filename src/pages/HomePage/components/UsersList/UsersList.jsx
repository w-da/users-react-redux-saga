import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getUsers } from '../../../../redux/users/userActions';
import { UserListItem } from './UserListItem';
import { LoadMoreBtn } from './LoadMoreBtn';
import { ErrorMessage } from '../../../../components/ErrorMessage';
import { Loader } from '../../../../components/Loader';

import styles from './UsersList.module.scss';

export const UsersList = ({ location, users, isLoading, hasError }) => {
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  function loadMoreHandler() {
    dispatch(getUsers(page));
    setPage(prevPage => prevPage + 1);
  }

  return (
    <div>
      {users.length !== 0 && (
        <ul className={styles.usersList}>
          {users.map(user => (
            <UserListItem key={user.id.value} user={user} location={location} />
          ))}
        </ul>
      )}
      {users.length !== 0 && (
        <LoadMoreBtn onLoadMore={loadMoreHandler} isLoading={isLoading} />
      )}
      {users.length !== 0 && isLoading && <Loader />}
      {hasError && <ErrorMessage />}
    </div>
  );
};
