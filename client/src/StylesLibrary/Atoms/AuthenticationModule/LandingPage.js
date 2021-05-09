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
  height: 100vh;
  padding-bottom: 2rem;
  background: radial-gradient(
    142.29% 99.49% at -10.57% 10.89%,
    #f5b6c1 25.39%,
    #ccd6eb 85.5%
  );
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

const SignupLinkButton = styled.button`
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
  margin-top: 1rem;
`;

const ActionBorder = styled(CenterAlignedColumnContainer)`
  width: 100%;
  height: auto;
  background: linear-gradient(
    189.43deg,
    rgba(245, 247, 249, 0.8) 14.56%,
    rgba(245, 247, 249, 0.2) 95.5%
  );
  margin-top: 10rem;
`;

const ActionContainer = styled(CenterAlignedColumnContainer)`
  width: 100%;
  height: auto;
  background: linear-gradient(
    179.99deg,
    rgba(232, 145, 145, 0.2) 2.3%,
    rgba(255, 255, 255, 0.2) 99.99%
  );
`;

const LoginPageButton = styled(CenterAlignedColumnContainer)`
  width: 80%;
  height: 48px;
  border-radius: 25px;
  margin-top: 1.5rem;
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

const MemberLoginButton = styled(LoginPageButton)`
  background: linear-gradient(90deg, #40e3be 0%, #6cb5d1 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;

const MemberLoginButtonText = styled(LoginPageButtonText)`
  color: #f3f4f6;
`;

const LoginPageInputTextBox = styled.input`
  width: 80%;
  height: 32px;
  margin-top: 1.2rem;
  background: #f3f4f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const LoginPageActionButton = styled.button`
  width: auto;
  height: 44px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background: linear-gradient(90deg, #40e3be 0%, #6cb5d1 100%);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const BackgroundCircle = styled(motion.div)`
  display: flex;
  width: 100px;
  height: 100px;
  margin-top: 10rem;
  background: linear-gradient(
    170.09deg,
    rgba(255, 255, 255, 0.4) 1.88%,
    rgba(255, 255, 255, 0) 99.59%,
    rgba(255, 255, 255, 0.1) 99.59%
  );
  border-radius: 50%;
  transform: rotate(117.83deg);
  position: absolute;

  top: 0;
  left: 0;
  offset-path: path(
    'M375 142c0 22.975-15.783 43.953-41.685 59.243C307.435 216.519 271.617 226 232 226s-75.435-9.481-101.315-24.757C104.783 185.953 89 164.975 89 142s15.783-43.953 41.685-59.243C156.565 67.481 192.383 58 232 58s75.435 9.48 101.315 24.757C359.217 98.047 375 119.025 375 142z'
  );
`;

const BackgroundCircle1 = styled(BackgroundCircle)`
  display: flex;
  width: 150px;
  height: 150px;
  bottom: -30;
  left: 0;
  offset-path: path(
    'M282 114.673l23.321 74.485.11.35h75.887l-61.112 46.077-.282.212.106.336 23.333 74.522-61.062-46.038-.301-.227-.301.227-61.062 46.038 23.333-74.522.106-.336-.282-.212-61.112-46.077h75.887l.11-.35L282 114.673z'
  );
`;

const BackgroundCircle2 = styled.div`
  width: 100px;
  height: 100px;
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
