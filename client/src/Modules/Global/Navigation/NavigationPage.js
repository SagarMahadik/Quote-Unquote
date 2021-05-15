import React from 'react';
import {
  StaggerAnimationChildContainer,
  StaggerAnimationParentContainer
} from 'StylesLibrary/Animations/FramerAnimations';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import QuoteSuccessNavigatiocard from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessNavigatiocard.js';
import { NavigationPageContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/NavigationPage.js';

const NavigationPage = ({
  addQuouteCallBack,
  readQuoteCallBack,
  addMore,
  navigatioCardTextColor
}) => {
  const parentCntainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.9
      }
    },
    exit: { opacity: 0 }
  };

  const childContainer = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <NavigationPageContainer
      style={{ marginTop: '-3rem' }}
      justifyContent={addMore ? 'flex-start' : 'center'}
    >
      <StaggerAnimationParentContainer
        variants={parentCntainer}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <StaggerAnimationChildContainer variants={childContainer}>
          <QuoteSuccessNavigatiocard
            navigationCardText={addMore ? 'Add another' : 'Add quote'}
            onClick={addQuouteCallBack}
            navigatioCardTextColor={navigatioCardTextColor}
          />
        </StaggerAnimationChildContainer>
        <StaggerAnimationChildContainer variants={childContainer}>
          <QuoteSuccessNavigatiocard
            onClick={readQuoteCallBack}
            navigationCardText="Read"
            navigatioCardTextColor={navigatioCardTextColor}
          />
        </StaggerAnimationChildContainer>
      </StaggerAnimationParentContainer>
    </NavigationPageContainer>
  );
};

export default NavigationPage;
