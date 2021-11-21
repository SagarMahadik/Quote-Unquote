import React from 'react';
import {
  LandingPageAuthorImage,
  LandingPageAuthorImageRow,
  LandingPageAuthorImageWrapper
} from 'Modules/AppLandingPage/Styles/AppLandingPageStyles.js';

const QuQAuthorCards = () => {
  const authorCardDetails = [
    {
      authorImage:
        'https://res.cloudinary.com/antilibrary/image/upload/v1636878097/Antilibrary/download_2_asnll5.jpg',
      cardBackgroundColor:
        'linear-gradient(132.88deg, #e77811 8.64%, #432204 70.39%)'
    },
    {
      authorImage:
        'https://res.cloudinary.com/antilibrary/image/upload/v1636876248/Antilibrary/download_1_jpohxr.jpg',
      cardBackgroundColor:
        ' linear-gradient(156.77deg, #a77eb9 -3.69%, #2B0C37 92.04%)'
    },
    {
      authorImage:
        'https://res.cloudinary.com/antilibrary/image/upload/v1636876152/Antilibrary/senecaa-1_1_etuqwm.jpg',
      cardBackgroundColor:
        'linear-gradient(141.18deg, #3E9D86 17.49%, #06382C 79.57%)'
    },
    {
      authorImage:
        'https://res.cloudinary.com/antilibrary/image/upload/v1636876154/Antilibrary/04STEVEJOBS1-superJumbo_zzevez.jpg',
      cardBackgroundColor:
        'linear-gradient(155.48deg, #0EAED4 3.6%, #1B0F01 102.51%, #03313D 102.51%)'
    },
    {
      authorImage:
        'https://res.cloudinary.com/antilibrary/image/upload/v1585376256/Antilibrary/220px-Taleb_mug_tvhdqa.jpg',
      cardBackgroundColor:
        'linear-gradient(144.66deg, #D03B5A 17.59%, #38020D 86.55%)'
    }
  ];

  return (
    <>
      <LandingPageAuthorImageRow width="90%">
        <LandingPageAuthorImageWrapper
          background={authorCardDetails[0].cardBackgroundColor}
        >
          <LandingPageAuthorImage src={authorCardDetails[0].authorImage} />
        </LandingPageAuthorImageWrapper>
        <LandingPageAuthorImageWrapper
          background={authorCardDetails[1].cardBackgroundColor}
        >
          <LandingPageAuthorImage src={authorCardDetails[1].authorImage} />
        </LandingPageAuthorImageWrapper>
      </LandingPageAuthorImageRow>
      <LandingPageAuthorImageRow width="70%" position="relative" top="-80px">
        <LandingPageAuthorImageWrapper
          background={authorCardDetails[2].cardBackgroundColor}
        >
          <LandingPageAuthorImage src={authorCardDetails[2].authorImage} />
        </LandingPageAuthorImageWrapper>
        <LandingPageAuthorImageWrapper
          background={authorCardDetails[3].cardBackgroundColor}
        >
          <LandingPageAuthorImage src={authorCardDetails[3].authorImage} />
        </LandingPageAuthorImageWrapper>
      </LandingPageAuthorImageRow>
      <LandingPageAuthorImageRow width="auto" position="relative" top="-200px">
        <LandingPageAuthorImageWrapper
          background={authorCardDetails[4].cardBackgroundColor}
        >
          <LandingPageAuthorImage src={authorCardDetails[4].authorImage} />
        </LandingPageAuthorImageWrapper>
      </LandingPageAuthorImageRow>
    </>
  );
};

export default QuQAuthorCards;
