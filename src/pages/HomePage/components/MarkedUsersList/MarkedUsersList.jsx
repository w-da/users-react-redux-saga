import React from 'react';
import { useSelector } from 'react-redux';

import { MarkedUsersListItem } from './MarkedUsersListItem';
import selectors from '../../../../redux/selectors';

import styles from '../UsersList/UsersList.module.scss';

export const MarkedUsersList = ({ location }) => {
  const markedUsers = useSelector(state => selectors.getMarkedUsers(state));
  const filteredMarkedUsers = useSelector(state =>
    selectors.getFilteredMarkedUsers(state)
  );

  return (
    <div>
      {!markedUsers.length && <p>You haven't marked any users yet</p>}
      {markedUsers.length !== 0 && (
        <ul className={styles.usersList}>
          {filteredMarkedUsers.map(user => (
            <MarkedUsersListItem
              user={user}
              key={user.id.value}
              location={location}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
