import type { NextPage } from "next";
import styled from "styled-components";
import WelcomeMessage1 from "./welcome-message1";
import WelcomeMessage from "./welcome-message";

const BackgroundIcon = styled.img`
  width: 100%;
`;
const ShowscreenRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

const Background = styled.div`
  width: 100%;
  background-color: #e6f3f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  padding-bottom: 0px;
  gap: 20px;
`;

const ContentShowscreenRoot = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 20px;
  box-sizing: border-box;
  position: relative;
  gap: 70px 0px;
  text-align: left;
  font-size: 32px;
  color: #028cb5;
  font-family: Poppins;


  max-width: 1402px;
  flex-shrink: 0;

  @media screen and (max-width: 800px) {
    gap: 70px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 70px 0px;
  }
`;


const Frame4: NextPage = () => {
  return (
    <ShowscreenRoot>
      <BackgroundIcon alt="" src="/transition.svg" />
      <Background>
        <ContentShowscreenRoot>
          <WelcomeMessage1 />
          <WelcomeMessage />
          <WelcomeMessage1 />
          <WelcomeMessage />
        </ContentShowscreenRoot>
        <BackgroundIcon alt="" src="/footertransition.svg" />
      </Background>
    </ShowscreenRoot>
  );
};

export default Frame4;
