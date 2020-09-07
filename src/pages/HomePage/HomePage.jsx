import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../redux/users/userActions';
import selectors from '../../redux/selectors';
import { Tabs } from './components/Tabs';
import { UsersList } from './components/UsersList';
import { MarkedUsersList } from './components/MarkedUsersList';
import { Loader } from '../../components/Loader';

import styles from './HomePage.module.scss';

export const HomePage = ({ location }) => {
  const [showAllUsers, setShowAllUsers] = useState(true);
  const users = useSelector(state => selectors.getUsers(state));
  const isLoading = useSelector(state => selectors.getIsLoading(state));
  const hasError = useSelector(state => selectors.getError(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers(1));
      return;
    }

    return;
  }, [dispatch, users]);

  function changeUsersDisplay() {
    setShowAllUsers(prevValue => !prevValue);
  }

  return (
    <section className={styles.homePage}>
      {!users.length && isLoading && <Loader />}
      {users.length !== 0 && (
        <Tabs
          onChangeUsersDisplay={changeUsersDisplay}
          disabled={showAllUsers}
        />
      )}
      {showAllUsers && (
        <UsersList
          location={location}
          users={users}
          isLoading={isLoading}
          hasError={hasError}
        />
      )}
      {!showAllUsers && <MarkedUsersList location={location} />}
    </section>
  );
};
