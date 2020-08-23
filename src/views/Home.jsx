import React from 'react';

const HomeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Home = ({ match }) => (
  <div style={HomeStyle}>
    <h1>
      Welcome!
    </h1>
    {match && match.params.testRouting && (
      <p>
        {match.params.testRouting}
      </p>
    )}
  </div>
);

export default Home;
