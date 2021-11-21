import React from 'react';

import { MoodPageSkeletonButton } from 'Modules/DisplayQuote/Components/MoodPage/Styles/moodpageStyles.js';

const MoodPageSkeletons = () => {
  const skeletonDummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {skeletonDummyArray.map((item, index) => {
        return (
          <MoodPageSkeletonButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: `${index}`
            }}
            key={index}
            exit={{ opacity: 0 }}
            background="rgba(255,255,255,0.4)"
          ></MoodPageSkeletonButton>
        );
      })}
    </>
  );
};

export default MoodPageSkeletons;
