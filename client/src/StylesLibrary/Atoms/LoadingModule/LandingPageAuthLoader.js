import React from 'react';
import Loader from 'StylesLibrary/Atoms/LoadingModule/Loader.js';

const LandingPageAuthLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: '0',
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.5)'
      }}
    >
      <Loader />
    </div>
  );
};

export default LandingPageAuthLoader;
