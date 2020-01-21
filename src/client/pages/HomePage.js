import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page Dedicated to JS</h1>
      <button onClick={() => console.log("Hi")}>Count</button>
    </div>
  )
}

export default { component: HomePage };
