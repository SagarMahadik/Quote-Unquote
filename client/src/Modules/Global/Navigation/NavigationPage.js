import React from 'react';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import QuoteSuccessNavigatiocard from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessNavigatiocard.js';

const NavigationPage = ({ addQuouteCallBack, readQuoteCallBack, addMore }) => {
  return (
    <CenterAlignedColumnContainer style={{ height: '100vh' }}>
      <QuoteSuccessNavigatiocard
        navigationCardText={addMore ? 'Add another' : 'Add quote'}
        onClick={addQuouteCallBack}
      />
      <QuoteSuccessNavigatiocard
        onClick={readQuoteCallBack}
        navigationCardText="Read"
      />
    </CenterAlignedColumnContainer>
  );
};

export default NavigationPage;
