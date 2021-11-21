import React from 'react';
import CloseIcon from 'StyleLibrary1.0/Icons/CloseIcon.js';
import {
  AuthorInfoDrawerContainer,
  AuthorInfoDrawerImage,
  AuthorInfoDrawerText,
  AuthorInfoDrawerCloseIcon,
  AuthorInfoDrawerTextContainer
} from 'Modules/DisplayQuote/Components/QuoteDisplay/Styles/QuotePageStyles.js';

const AuthorInfoDrawer = ({ authorImageUrl, onClick, authorBio }) => {
  return (
    <>
      <AuthorInfoDrawerContainer
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: 200 }}
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
