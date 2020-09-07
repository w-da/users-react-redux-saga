import React from 'react';
import { useSelector } from 'react-redux';

import selectors from '../../../../redux/selectors';

export const MarkedUsersQuantity = () => {
  const quantity = useSelector(state =>
    selectors.getMarkedUsersQuantity(state)
  );

  return <h2>Marked Users: {quantity}</h2>;
};
