import React from 'react';
import ReactHowler from 'react-howler';

const DeleteSound = ({ play }) => {
  console.log('in react sound');
  return (
    <ReactHowler
      src={
        'https://res.cloudinary.com/antilibrary/video/upload/v1620467582/quite-impressed-565_cpxkjy.mp3'
      }
      playing={play}
      volume={0.8}
    />
  );
};

export default DeleteSound;
