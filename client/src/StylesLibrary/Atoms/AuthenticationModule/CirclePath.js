import React from 'react';

import { LandingPageBackground } from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';
import Bubble1 from 'Modules/Authentication/CoreLandingPage/LandingBubbles/Bubble1';
import Bubble2 from 'Modules/Authentication/CoreLandingPage/LandingBubbles/Bubble2';
import Bubble3 from 'Modules/Authentication/CoreLandingPage/LandingBubbles/Bubble3';

function PathSVG() {
  const transition = { duration: 50, repeat: Infinity, ease: 'easeInOut' };
  return (
    <LandingPageBackground>
      <Bubble1 />
      <Bubble2 />
      <Bubble3 />
    </LandingPageBackground>
  );
}

export default PathSVG;
