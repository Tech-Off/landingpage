import type { NextPage } from "next";
import styled from "styled-components";

const BackgroundIcon = styled.img`
  width: 1920px;
  height: 261.5px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: -259px;
`;
const GetStartedWith = styled.h2`
  margin: 0;
  width: 1020px;
  height: 62px;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 800px) {
    font-size: 44px;
  }
  @media screen and (max-width: 450px) {
    font-size: 33px;
  }
`;
const ButtonjoinusChild = styled.img`
  height: 33.3px;
  width: 33.3px;
  position: relative;
`;
const JoinUs = styled.div`
  position: relative;
  font-size: 32px;
  font-weight: 600;
  font-family: Poppins;
  color: #028cb5;
  text-align: left;
`;
const Buttonjoinus = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 30px;
  background-color: #fff;
  border-radius: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0px 10px;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: #e6e6e6;
  }
`;
const FooterContainer = styled.div`
  max-width: 1402px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  box-sizing: border-box;
  position: relative;
  gap: 30px 0px;
  max-width: 100%;
  text-align: left;
  font-size: 55px;
  color: #fff;
  font-family: Poppins;

  background-color: #028cb5;
`;

const FooterRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #028cb5;
`;

const Footer: NextPage = () => {
  return (
    <FooterRoot>
      <FooterContainer>
        <GetStartedWith>Get Started with OnboardMe Today</GetStartedWith>
        <Buttonjoinus>
          <ButtonjoinusChild alt="" src="/group-82.svg" />
          <JoinUs>Join us</JoinUs>
        </Buttonjoinus>
      </FooterContainer>
    </FooterRoot>
  );
};

export default Footer;
