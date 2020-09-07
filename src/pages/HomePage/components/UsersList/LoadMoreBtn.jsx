import React from 'react';

import styles from './UsersList.module.scss';

export const LoadMoreBtn = ({ onLoadMore, isLoading }) => {
  return (
    <button
      type="button"
      className={styles.usersList__loadBtn}
      onClick={onLoadMore}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Load more'}
    </button>
  );
};
