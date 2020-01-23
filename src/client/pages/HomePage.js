import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div className="center-align" style={{ marginTop: '220px' }}>
      <Helmet>
        <title>Ajax27 | React SSR</title>
        <meta property="og:title" content="Ajax27 | React SSR" />
      </Helmet>
      <h1>Welcome to the React SSR Homepage</h1>
      <p>An Application to show the benefits Server Side Rendering</p>
    </div>
  )
};

export default { component: HomePage };
