import React from 'react';
import { useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';

import { changeFilter } from '../../../../redux/users/userActions';

export const FilterInput = () => {
  const dispatch = useDispatch();

  return (
    <DebounceInput
      debounceTimeout={250}
      onChange={event => dispatch(changeFilter(event.target.value))}
      placeholder="Filter by name"
    />
  );
};
