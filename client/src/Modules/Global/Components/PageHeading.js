import React from 'react';
import HomeButton from 'StylesLibrary/Molecules/GlobalModule/HomeButton';
import LogoutButton from 'StylesLibrary/Molecules/GlobalModule/LogoutButton.js';
import { AdminPageHeadingContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';
import { Link } from 'react-router-dom';
const PageHeading = () => {
  return (
    <AdminPageHeadingContainer>
      <Link to="/">
        <HomeButton />
      </Link>
      <LogoutButton />
    </AdminPageHeadingContainer>
  );
};

export default PageHeading;
