import React from 'react';
import CloseIcon from 'StyleLibrary1.0/Icons/CloseIcon.js';
import {
  AuthorInfoDrawerContainer,
  AuthorInfoDrawerImage,
  AuthorInfoDrawerText,
  AuthorInfoDrawerCloseIcon,
  AuthorInfoDrawerTextContainer
} from 'Modules/DisplayQuote/Components/QuoteDisplay/Styles/QuotePageStyles.js';

import { quQTheme } from 'BennyStyleLibrary/Themes/darkTheme.js';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';

const AuthorInfoDrawer = ({ authorImageUrl, onClick, authorBio }) => {
  const { themeIndex } = useApplicationState();
  return (
    <>
      <AuthorInfoDrawerContainer
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: 200 }}
        backgroundColor={`radial-gradient(51.33% 74.07% at 48.67% 46.39%, ${quQTheme[themeIndex].primaryColor} 0%,${quQTheme[themeIndex].secondaryColor} 100%)`}
      >
        <AuthorInfoDrawerCloseIcon onClick={() => onClick()}>
          <CloseIcon />
        </AuthorInfoDrawerCloseIcon>
        <AuthorInfoDrawerImage src={authorImageUrl}></AuthorInfoDrawerImage>
        <AuthorInfoDrawerTextContainer>
          <AuthorInfoDrawerText>{authorBio}</AuthorInfoDrawerText>
        </AuthorInfoDrawerTextContainer>
      </AuthorInfoDrawerContainer>
    </>
  );
};

export default AuthorInfoDrawer;
