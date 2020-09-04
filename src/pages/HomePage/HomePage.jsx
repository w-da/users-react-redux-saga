import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../../redux/users/userActions';
import { Tabs } from './components/Tabs';
import { UsersList } from './components/UsersList';

import styles from './HomePage.module.scss';

const Home = ({ onGetUsers }) => {
  const [showAllUsers, setShowAllUsers] = useState(true);

  useEffect(() => {
    onGetUsers();
  }, [onGetUsers]);

  function changeUsersDisplay() {
    setShowAllUsers(prevValue => !prevValue);
  }

  return (
    <section className={styles.homePage}>
      <Tabs onChangeUsersDisplay={changeUsersDisplay} disabled={showAllUsers} />
      {showAllUsers && <UsersList />}
    </section>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUsers: () => dispatch(getUsers(1)),
  };
};

export const HomePage = connect(null, mapDispatchToProps)(Home);
