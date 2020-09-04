import React, { useState, useEffect } from 'react';

import { UserDetailsPage } from './UserDetailsPage';
import { useSelector } from 'react-redux';

import selectors from '../../redux/selectors';
import { getUserById } from './helpers/getUserById';

export const UserDetailsContainer = ({ match }) => {
  const { userID } = match.params;
  const [userById, setUserById] = useState(
    useSelector(state => selectors.getUserById(state, userID))
  );

  useEffect(() => {
    if (!userById) {
      getUserById(userID);
    }
  }, [userById, userID]);

  if (!userById) return null;

  return <UserDetailsPage user={userById} />;
};
