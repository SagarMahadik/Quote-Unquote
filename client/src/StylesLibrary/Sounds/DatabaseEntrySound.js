import React from 'react';
import ReactHowler from 'react-howler';

const DatabaseEntrySound = ({ play }) => {
  return (
    <ReactHowler
      src={
        'https://res.cloudinary.com/antilibrary/video/upload/v1605352982/pristine-609_bw5gcg.mp3'
      }
      playing={play}
      volume={0.8}
    />
  );
};

export default DatabaseEntrySound;
