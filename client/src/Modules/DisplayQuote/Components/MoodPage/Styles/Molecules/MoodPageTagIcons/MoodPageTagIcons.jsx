import React from 'react';
import MoodPagePhilosophy from './MoodPagePhilosophy';
import MoodPageWit from './MoodPageWit';
import MoodPageCoding from './MoodPageCoding';
import MoodPageHumour from './MoodPageHumour';

const MoodPageTagIcons = ({ tag }) => {
  return (
    <div>
      {(() => {
        switch (tag) {
          case 'Philosophy':
            return <MoodPagePhilosophy />;
          case 'Wit':
            return <MoodPageWit />;
          case 'Coding':
            return <MoodPageCoding />;
          case 'Humour':
            return <MoodPageHumour />;

          default:
            return null;
        }
      })()}
    </div>
  );
};

export default MoodPageTagIcons;
