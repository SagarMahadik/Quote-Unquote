import styled from 'styled-components/macro';
import {
  CenterAlignedColumnContainer,
  CenterAlignedColumnContainerWithShadowBackground
} from '../GlobalQuoteModule/ContainerStyles';

import { motion } from 'framer-motion';

const LandingPageBackground = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  width: 100%;
  height: auto;
  padding-bottom: 2rem;
  background: radial-gradient(
    142.29% 99.49% at -10.57% 10.89%,
    #f5b6c1 25.39%,
    #ccd6eb 85.5%
  );
  padding-bottom: 15vh;
`;

const TagLineText = styled.h1`
  font-family: Questrial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  background: linear-gradient(
    124.02deg,
    #f47373 17.84%,
    #9cc68e 50.65%,
    #6a49f0 87.39%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SignupLinkButton = styled(motion.button)`
  display: flex;
  width: auto;
  height: 20px;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  flex-direction: column;
  align-items: center;
  outline: none;
  background: none;
  border: none;
  text-decoration: underline;
  text-decoration-color: #e1d6e4;
`;

const SignupButtonText = styled(TagLineText)``;

const SignupButtonUnderline = styled(CenterAlignedColumnContainer)`
  width: auto;
  height: 10px;
  background: linear-gradient(
    124.02deg,
    #f47373 17.84%,
    #9cc68e 50.65%,
    #6a49f0 87.39%
  );
`;

const OverlayContainer = styled(CenterAlignedColumnContainer)`
  width: 90%;
  height: auto;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 25px;
  justify-content: flex-start;
  margin-top: 4rem;
  border-radius: 25px;
  padding-bottom: 3rem;
`;

const ActionBorder = styled(CenterAlignedColumnContainer)`
  width: 100%;
  height: auto;
  background: linear-gradient(
    189.43deg,
    rgba(245, 247, 249, 0.8) 14.56%,
    rgba(245, 247, 249, 0.2) 95.5%
  );
  padding: 0.5px;
  margin-top: 6rem;
  border-radius: 25px;
  padding-bottom: 4rem;
`;

const ActionContainer = styled(CenterAlignedColumnContainer)`
  width: 98%;
  height: auto;
  background: linear-gradient(
    179.99deg,
    rgba(232, 145, 145, 0.2) 2.3%,
    rgba(255, 255, 255, 0.2) 99.99%
  );
  border-radius: 25px;
  padding-bottom: 2rem;
`;

const LoginPageButton = styled(CenterAlignedColumnContainer)`
  width: 80%;
  height: 48px;
  border-radius: 25px;
  margin-top: 1.8rem;
`;

const LoginPageButtonText = styled.h1`
  font-family: Questrial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  padding: 0;
`;

const EnterLibraryButton = styled(LoginPageButton)`
  background: #f3f4f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: blur(0.2px);
`;

const EnterLibraryButtonText = styled(LoginPageButtonText)`
  background: linear-gradient(90deg, #40e3be 0%, #6cb5d1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const MemberLoginButton = styled(motion.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  width: 80%;
  height: 48px;
  border-radius: 25px;
  margin-top: 1.8rem;
  background: linear-gradient(90deg, #40e3be 0%, #6cb5d1 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;

const MemberLoginButtonText = styled(LoginPageButtonText)`
  color: #f3f4f6;
`;

const LoginPageInputTextBox = styled.input`
  font-family: Questrial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-indent: 10px;
  color: #c4c4c4;
  width: 80%;
  height: 32px;
  margin-top: 1.8rem;
  background: #f3f4f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
`;

const LoginPageActionButton = styled(motion.button)`
  width: auto;
  height: 44px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  background: linear-gradient(90deg, #40e3be 0%, #6cb5d1 100%);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  outline: none;
  margin-top: 1.5rem;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #f3f4f6;
  padding: 4px 8px;
`;

const BackgroundCircle = styled(motion.div)`
  display: flex;
  width: 100px;
  height: 100px;
  background: linear-gradient(
    170.09deg,
    rgba(255, 255, 255, 0.4) 1.88%,
    rgba(255, 255, 255, 0) 99.59%,
    rgba(255, 255, 255, 0.1) 99.59%
  );
  position: absolute;
  margin-top: -12rem;
  margin-left: -15rem;
  border-radius: 50%;
  transform: rotate(117.83deg);
`;

const BackgroundCircle1 = styled(BackgroundCircle)`
  display: flex;
  width: 150px;
  height: 150px;
  position: absolute;
  margin-top: -34rem;
  margin-left: -8rem;
  transform: rotate(67.66deg);
`;

const BackgroundCircle2 = styled(BackgroundCircle)`
  position: absolute;
  width: 100px;
  height: 100px;
  margin-top: -24rem;
  margin-left: 15rem;
`;

const BackgroundCircle3 = styled(BackgroundCircle)`
  display: flex;
  top: 0;
  left: 0;
  width: 75px;
  height: 75px;
  offset-path: path(
    'M363.5 227c0 39.145-8.716 74.558-22.784 100.168C326.639 352.797 307.272 368.5 286 368.5s-40.639-15.703-54.716-41.332C217.216 301.558 208.5 266.145 208.5 227c0-39.144 8.716-74.558 22.784-100.168C245.361 101.203 264.728 85.5 286 85.5s40.639 15.703 54.716 41.332C354.784 152.442 363.5 187.856 363.5 227z'
  );
`;

const BackgroundCircle4 = styled.div`
  width: 50px;
  height: 50px;
`;

export {
  LandingPageBackground,
  TagLineText,
  OverlayContainer,
  ActionBorder,
  ActionContainer,
  EnterLibraryButton,
  EnterLibraryButtonText,
  MemberLoginButton,
  MemberLoginButtonText,
  LoginPageInputTextBox,
  LoginPageActionButton,
  BackgroundCircle,
  BackgroundCircle1,
  BackgroundCircle2,
  BackgroundCircle3,
  BackgroundCircle4,
  SignupLinkButton,
  SignupButtonText,
  SignupButtonUnderline
};
