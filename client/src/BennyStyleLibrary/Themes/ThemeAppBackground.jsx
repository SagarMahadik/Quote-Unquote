import React from 'react';
import { CenterAlignedFlexStartColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';
import { quQTheme } from './darkTheme';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';

const ThemeAppBackground = ({ children }) => {
  const { themeIndex } = useApplicationState();

  return (
    <CenterAlignedFlexStartColumnContainer
      background={`radial-gradient(103.04% 56.47% at 49.87% 50%, ${quQTheme[themeIndex].primaryColor} 30.25%, ${quQTheme[themeIndex].secondaryColor} 100%)`}
    >
      {children}
    </CenterAlignedFlexStartColumnContainer>
  );
};

export default ThemeAppBackground;
