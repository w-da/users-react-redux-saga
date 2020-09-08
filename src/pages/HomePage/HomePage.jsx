import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../redux/users/userActions';
import selectors from '../../redux/selectors';

import { Tabs } from './components/Tabs';
import { FilterInput } from './components/FilterInput';
import { UsersList } from './components/UsersList';
import { MarkedUsersList } from './components/MarkedUsersList';
import { Loader } from '../../components/Loader';

import styles from './HomePage.module.scss';

export const HomePage = ({ location }) => {
  const [showAllUsers, setShowAllUsers] = useState(true);
  const page = useSelector(state => selectors.getPage(state));
  const users = useSelector(state => selectors.getUsers(state));
  const filteredUsers = useSelector(state => selectors.getFilteredUsers(state));
  const isLoading = useSelector(state => selectors.getIsLoading(state));
  const hasError = useSelector(state => selectors.getError(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers(page));
    }
  }, [dispatch, users, page]);

  function changeUsersDisplay() {
    setShowAllUsers(prevValue => !prevValue);
  }

  return (
    <section className={styles.homePage}>
      {!users.length && isLoading && <Loader />}
      {users.length !== 0 && (
        <div className={styles.tabsInputWrapper}>
          <Tabs
            onChangeUsersDisplay={changeUsersDisplay}
            disabled={showAllUsers}
          />
          <FilterInput />
        </div>
      )}
      {filteredUsers.length === 0 && users.length !== 0 && (
        <p className={styles.homePage__info}>No matches</p>
      )}
      {showAllUsers && (
        <UsersList
          location={location}
          users={filteredUsers}
          isLoading={isLoading}
          hasError={hasError}
          page={page}
        />
      )}
      {!showAllUsers && <MarkedUsersList location={location} />}
    </section>
  );
};
