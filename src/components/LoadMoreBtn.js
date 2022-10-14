import React from 'react';

const LoadMoreBtn = ({ loadMore, allJobsDisplayed }) => {
  return (
    <button className='load-more-btn' onClick={loadMore}>{allJobsDisplayed ? "You've Seen All Available Jobs" : "Load More"}</button>
  );
};

export default LoadMoreBtn