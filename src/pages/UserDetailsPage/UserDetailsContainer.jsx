import React, { useState, useEffect } from 'react';

import { UserDetailsPage } from './UserDetailsPage';
import { useSelector } from 'react-redux';

import { ErrorMessage } from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';
import selectors from '../../redux/selectors';
import { getUserById } from './helpers/getUserById';

export const UserDetailsContainer = ({ match, location }) => {
  const { userID } = match.params;
  const [error, setError] = useState(false);
  const [userById, setUserById] = useState(
    useSelector(state => selectors.getUserById(state, userID))
  );

  useEffect(() => {
    if (!userById) {
      async function getUser() {
        const user = await getUserById(userID);

        if (user) {
          setUserById(user);
        } else {
          setError(true);
        }
      }

      getUser();
    }
  }, [userById, userID]);

  return (
    <div>
      {!userById && !error && <Loader />}
      {error && <ErrorMessage />}
      {userById && <UserDetailsPage user={userById} location={location} />}
    </div>
  );
};
