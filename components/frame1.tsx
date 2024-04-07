import type { NextPage } from "next";
import styled from "styled-components";

const LogoIcon = styled.img`
  height: 50px;
  width: 50px;
  position: relative;
`;
const OnBoardMe = styled.div`
  position: relative;
  line-height: 33.6px;
  font-weight: 800;
  white-space: nowrap;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0px 10px;
`;
const SeConnecter = styled.div`
  position: relative;
  font-weight: 600;
`;
const Button = styled.div`
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 12px 8px 16px;
  white-space: nowrap;
`;
const CrerUnCompte = styled.div`
  position: relative;
  font-size: 13.3px;
  font-weight: 600;
  font-family: Poppins;
  color: #fff;
  text-align: center;
`;
const Button1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px 12px 8px 16px;
  background-color: #028cb5;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  &:hover {
    background-color: #1ca6cf;
  }
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 1px 0px 0px;
  gap: 0px 14px;
  font-size: 13.3px;
  color: #000;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Header = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  text-align: center;
  font-size: 22.4px;
  color: #028cb5;
  font-family: Poppins;
`;
const EmpowerNewHires = styled.span``;
const Onboarding = styled.span`
  color: #028cb5;
`;
const EmpowerNewHiresContainer = styled.h2`
  margin: 0;
  width: 566px;
  height: 238px;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  @media screen and (max-width: 800px) {
    font-size: 44px;
  }
  @media screen and (max-width: 450px) {
    font-size: 33px;
  }
`;
const CatchingpharseIcon = styled.img`
  width: 100%;
`;
const CatchingpharseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 28px;
  box-sizing: border-box;
  max-width: 100%;
`;
const EmpowerNewHiresWithEfficieParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px 0px;
  max-width: 100%;
`;
const GetStarted = styled.div`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  font-family: Poppins;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 19px;
  }
`;
const Divcolumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Divcolumns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 11px;
`;
const Button2 = styled.button`
  cursor: pointer;
  border: none;
  padding: 6px 10px 6px 20px;
  background-color: #028cb5;
  height: 53px;
  border-radius: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
const LearnMore = styled.div`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  font-family: Poppins;
  color: #028cb5;
  text-align: center;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 19px;
  }
`;
const Button3 = styled.button`
  cursor: pointer;
  border: 2px solid #028cb5;
  padding: 6px 10px 6px 20px;
  background-color: transparent;
  flex: 1;
  border-radius: 52px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 124px;
  min-height: 53px;
`;
const ButtonParent = styled.div`
  width: 398px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 16px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 51px 0px;
  min-width: 566px;
  max-width: 100%;
  @media screen and (max-width: 1150px) {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    gap: 51px 0px;
    min-width: 100%;
  }
`;
const Halo = styled.div`
  height: 491px;
  width: 491px;
  position: absolute;
  margin: 0 !important;
  right: -212px;
  bottom: -49px;
  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #028cb5,
    rgba(217, 217, 217, 0)
  );
`;
const OnboardingimageIcon = styled.img`
  height: 395px;
  flex: 1;
  position: relative;
  border-radius: 15px;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 497px;
  z-index: 1;
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
`;
const ContainerFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  gap: 0px 34px;
  max-width: 100%;
  @media screen and (max-width: 1150px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 800px) {
    gap: 0px 34px;
  }
`;
const ContainerFrame1Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Frame1Inner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const IconValid = styled.img`
  height: 29px;
  width: 29px;
  position: relative;
`;
const Documentations = styled.div`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const DocumentationsIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 12px;
`;
const Footer = styled.div`
  width: 1066px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  max-width: 100%;
  font-size: 20px;
  color: #028cb5;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const Frame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 60px 0px 30px;
  box-sizing: border-box;
  gap: 133px 0px;

  max-width: 1402px;

  flex-shrink: 0;

  text-align: left;
  font-size: 55px;
  color: #363636;
  font-family: Poppins;


  @media screen and (max-width: 1350px) {
    gap: 133px 0px;
  }
  @media screen and (max-width: 800px) {
    gap: 133px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 133px 0px;
  }

`;

const Frame1: NextPage = () => {
  return (
    <Frame>
      <Header>
        <LogoContainer>
          <LogoIcon loading="lazy" alt="" src="/group-76.svg" />
          <OnBoardMe>On-Board-me</OnBoardMe>
        </LogoContainer>
        <LoginContainer>
          <Button>
            <SeConnecter>Se connecter</SeConnecter>
          </Button>
          <Button1>
            <CrerUnCompte>Créer un compte</CrerUnCompte>
          </Button1>
        </LoginContainer>
      </Header>
      <Frame1Inner>
        <ContainerFrame1Wrapper>
          <ContainerFrame>
            <FrameParent>
              <EmpowerNewHiresWithEfficieParent>
                <EmpowerNewHiresContainer>
                  <EmpowerNewHires>{`Empower New Hires with Efficient `}</EmpowerNewHires>
                  <Onboarding>Onboarding</Onboarding>
                  <EmpowerNewHires>!</EmpowerNewHires>
                </EmpowerNewHiresContainer>
                <CatchingpharseWrapper>
                  <CatchingpharseIcon
                    loading="lazy"
                    alt=""
                    src="/catchingpharse.svg"
                  />
                </CatchingpharseWrapper>
              </EmpowerNewHiresWithEfficieParent>
              <ButtonParent>
                <Button2>
                  <Divcolumns>
                    <Divcolumn>
                      <GetStarted>Get Started</GetStarted>
                    </Divcolumn>
                  </Divcolumns>
                </Button2>
                <Button3>
                  <Divcolumns>
                    <Divcolumn>
                      <LearnMore>Learn More</LearnMore>
                    </Divcolumn>
                  </Divcolumns>
                </Button3>
              </ButtonParent>
            </FrameParent>
            <Halo />
            <OnboardingimageIcon
              loading="lazy"
              alt=""
              src="/onboardingimage@2x.png"
            />
          </ContainerFrame>
        </ContainerFrame1Wrapper>
      </Frame1Inner>
      <Footer>
        <DocumentationsIcon>
          <IconValid loading="lazy" alt="" src="/icon-valid.svg" />
          <Documentations>Documentations</Documentations>
        </DocumentationsIcon>
        <DocumentationsIcon>
          <IconValid alt="" src="/icon-valid.svg" />
          <Documentations>Formations</Documentations>
        </DocumentationsIcon>
        <DocumentationsIcon>
          <IconValid alt="" src="/icon-valid.svg" />
          <Documentations>IA Assistant</Documentations>
        </DocumentationsIcon>
        <DocumentationsIcon>
          <IconValid alt="" src="/icon-valid.svg" />
          <Documentations>Plug and Play</Documentations>
        </DocumentationsIcon>
      </Footer>
    </Frame>
  );
};

export default Frame1;
