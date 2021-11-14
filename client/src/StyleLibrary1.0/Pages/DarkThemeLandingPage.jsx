import React from 'react';
import { CenterAlignedColumnContainer } from 'StyleLibrary1.0/Atoms/containerStyles.js';
import Logo from 'StyleLibrary1.0/Icons/Logo.jsx';
import styled from 'styled-components';
import { RowContainer } from './../../StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

import LandingPageStartReadingIcon from 'StyleLibrary1.0/Icons/LandingPageStartIcon.js';
import { incomeButtonVibrations } from './../../Utils/vibrations';
import { Link } from 'react-router-dom';

const LandingPageAuthorImageContainer = styled(RowContainer)`
  //width: 90%;
  height: auto;
  align-items: center;
  justify-content: space-between;
`;

const LandingPageAuthorImageWrapper = styled.div`
  width: 100px;
  height: 145px;
  border-radius: 388px;
  background: ${props => props.backgroundColor};
  //background: linear-gradient(132.88deg, #e77811 8.64%, #432204 70.39%);
  padding: 4px;
  box-shadow: -4px -4px 8px 8px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.8));
`;

const LandingPageAuthorImageBorder = styled.div`
  width: 120px;
  height: 150px;
`;

const LandingPageAuthorImage = styled.img`
  width: 100px;
  height: 145px;
  border-radius: 388px;
  object-fit: cover;
  filter: grayscale(100%);
`;
const IconContainer = styled(CenterAlignedColumnContainer)`
  width: 89px;
  height: 89px;
  justify-content: center;
  margin-top: -100px;
`;

const IconLink = styled(Link)`
  text-decoration: none;
`;

const DarkThemeLandingPage = () => {
  return (
    <CenterAlignedColumnContainer
      backgroundColor="black"
      justifyContent="flex-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Logo style={{ marginTop: '24px' }} />
      <LandingPageAuthorImageContainer
        width="90%"
        style={{ marginTop: '24px' }}
      >
        <LandingPageAuthorImageWrapper backgroundColor="linear-gradient(132.88deg, #e77811 8.64%, #432204 70.39%)">
          <LandingPageAuthorImage src="https://res.cloudinary.com/antilibrary/image/upload/v1636878097/Antilibrary/download_2_asnll5.jpg" />
        </LandingPageAuthorImageWrapper>
        <LandingPageAuthorImageWrapper backgroundColor=" linear-gradient(156.77deg, #a77eb9 -3.69%, #2B0C37 92.04%)">
          <LandingPageAuthorImage src="https://res.cloudinary.com/antilibrary/image/upload/v1636876248/Antilibrary/download_1_jpohxr.jpg" />
        </LandingPageAuthorImageWrapper>
      </LandingPageAuthorImageContainer>
      <LandingPageAuthorImageContainer
        position="relative"
        width="70%"
        top="-8%"
      >
        <LandingPageAuthorImageWrapper backgroundColor="linear-gradient(141.18deg, #3E9D86 17.49%, #06382C 79.57%)">
          <LandingPageAuthorImage src="https://res.cloudinary.com/antilibrary/image/upload/v1636876152/Antilibrary/senecaa-1_1_etuqwm.jpg" />
        </LandingPageAuthorImageWrapper>
        <LandingPageAuthorImageWrapper backgroundColor="linear-gradient(155.48deg, #0EAED4 3.6%, #1B0F01 102.51%, #03313D 102.51%)">
          <LandingPageAuthorImage src="https://res.cloudinary.com/antilibrary/image/upload/v1636876154/Antilibrary/04STEVEJOBS1-superJumbo_zzevez.jpg" />
        </LandingPageAuthorImageWrapper>
      </LandingPageAuthorImageContainer>
      <LandingPageAuthorImageContainer
        style={{ justifyContent: 'center', position: 'relative', top: '-20%' }}
      >
        <LandingPageAuthorImageWrapper backgroundColor="linear-gradient(144.66deg, #D03B5A 17.59%, #38020D 86.55%)">
          <LandingPageAuthorImage src="https://res.cloudinary.com/antilibrary/image/upload/v1585376256/Antilibrary/220px-Taleb_mug_tvhdqa.jpg" />
        </LandingPageAuthorImageWrapper>
      </LandingPageAuthorImageContainer>
      <IconLink to="/displayQuotesDarkTheme">
        <IconContainer
          initial={{ opacity: 0.7, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            repeatType: 'reverse'
          }}
          exit={{ opacity: 0, y: 10 }}
        >
          <LandingPageStartReadingIcon />
        </IconContainer>
      </IconLink>
    </CenterAlignedColumnContainer>
  );
};

export default DarkThemeLandingPage;
