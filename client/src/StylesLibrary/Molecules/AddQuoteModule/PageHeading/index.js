import React from 'react';
import {
  PageHeadingContainer,
  PageHeadingText
} from 'StylesLibrary/Atoms/AddQuoteModule/PageHeading/index.js';

import LogoutButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/LogoutButton.js';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

const PageHeading = () => {
  return (
    <CenterAlignedColumnContainer>
      <PageHeadingContainer>
        <PageHeadingText>Logo</PageHeadingText>
        <PageHeadingText>Add a quote</PageHeadingText>
        <LogoutButton />
      </PageHeadingContainer>
    </CenterAlignedColumnContainer>
  );
};

export default PageHeading;
