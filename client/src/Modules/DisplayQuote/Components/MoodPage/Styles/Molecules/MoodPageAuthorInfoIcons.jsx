import { CenterAlignedColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';
import React from 'react';
import Brainy from '../Molecules/MoodPageAuthorIcons/Brainy';
import Dark from '../Molecules/MoodPageAuthorIcons/Dark';
import Fire from '../Molecules/MoodPageAuthorIcons/Fire';
import Humourous from '../Molecules/MoodPageAuthorIcons/Humourous';
import Philosopher from '../Molecules/MoodPageAuthorIcons/Philosopher';
import Relax from '../Molecules/MoodPageAuthorIcons/Relax';

const MoodPageAuthorInfoIcons = ({ tag }) => {
  const iconWidth = '16px';
  const iconHeight = '16px';
  const iconMargin = '2px';

  return (
    <CenterAlignedColumnContainer
      style={{
        width: iconWidth,
        height: iconHeight,
        margin: iconMargin,
        border: '1px solid rgba(255, 255, 255, 0.6)',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: '1px'
      }}
    >
      {(() => {
        switch (tag) {
          case 'Brainy':
            return <Brainy />;
          case 'Dark':
            return <Dark />;
          case 'Fire':
            return <Fire />;
          case 'Humourous':
            return <Humourous />;
          case 'Philosopher':
            return <Philosopher />;
          case 'Relax':
            return <Relax />;

          default:
            return null;
        }
      })()}
    </CenterAlignedColumnContainer>
  );
};

export default MoodPageAuthorInfoIcons;
