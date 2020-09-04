import React from 'react';
import { connect } from 'react-redux';

import selectors from '../../../../redux/selectors';
import { UserListItem } from './UserListItem';

import styles from './UsersList.module.scss';

const List = ({ isLoading, users, hasError }) => {
  return (
    <div>
      {!users.length && isLoading && <p>Loading...</p>}
      {hasError && <p>Something went wrong</p>}
      {users.length && (
        <ul className={styles.usersList}>
          {users.map(user => (
            <UserListItem key={user.id.value} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: selectors.getIsLoading(state),
    users: selectors.getUsers(state),
    hasError: selectors.getError(state),
  };
};

export const UsersList = connect(mapStateToProps)(List);
