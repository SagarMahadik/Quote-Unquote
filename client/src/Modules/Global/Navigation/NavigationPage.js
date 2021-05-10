import React from 'react';
import {
  StaggerAnimationChildContainer,
  StaggerAnimationParentContainer
} from 'StylesLibrary/Animations/FramerAnimations';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import QuoteSuccessNavigatiocard from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessNavigatiocard.js';

const NavigationPage = ({ addQuouteCallBack, readQuoteCallBack, addMore }) => {
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
    <StaggerAnimationParentContainer
      variants={parentCntainer}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <CenterAlignedColumnContainer style={{ height: '100vh' }}>
        <StaggerAnimationChildContainer variants={childContainer}>
          <QuoteSuccessNavigatiocard
            navigationCardText={addMore ? 'Add another' : 'Add quote'}
            onClick={addQuouteCallBack}
          />
        </StaggerAnimationChildContainer>
        <StaggerAnimationChildContainer variants={childContainer}>
          <QuoteSuccessNavigatiocard
            onClick={readQuoteCallBack}
            navigationCardText="Read"
          />
        </StaggerAnimationChildContainer>
      </CenterAlignedColumnContainer>
    </StaggerAnimationParentContainer>
  );
};

export default NavigationPage;
