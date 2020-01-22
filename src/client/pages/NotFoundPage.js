import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="center-align">
      <h1 style={{ marginTop: '220px' }}>Nothing to see, route not found :(</h1>
    </div>
  )
};

export default {
  component: NotFoundPage
};
