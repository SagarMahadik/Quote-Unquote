import React, { useEffect } from 'react';
import {
  QuQLogoContainer,
  AppLandingPageContainer
} from 'Modules/AppLandingPage/Styles/AppLandingPageStyles.js';
import QuQLogo from 'Modules/AppLandingPage/Styles/Molecules/QuQLogo.jsx';
import QuQAuthorCards from 'Modules/AppLandingPage/Styles/Molecules/QuQAuthorCards.jsx';
import QuQEnterButton from 'Modules/AppLandingPage/Styles/Molecules/QuQEnteryButton.jsx';
import { useHistory } from 'react-router-dom';
import OverlayAnimation from 'Modules/Global/Components/OverlayAnimation';
import ReactGA from 'react-ga';

const AppLandingPage = () => {
  const history = useHistory();

  const startReadingQuotes = () => {
    history.push('/moodPage');
  };
  return (
    <AppLandingPageContainer>
      <OverlayAnimation />
      <QuQLogoContainer>
        <QuQLogo />
      </QuQLogoContainer>
      <QuQAuthorCards />
      <QuQEnterButton onClick={() => startReadingQuotes()} />
    </AppLandingPageContainer>
  );
};

export default AppLandingPage;
