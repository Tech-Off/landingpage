import type { NextPage } from "next";
import styled from "styled-components";

const FasterBuildFormation = styled.div`
  width: 448px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
  @media screen and (max-width: 450px) {
    font-size: 19px;
  }
`;
const ImagineAWorld = styled.div`
  width: 493px;
  position: relative;
  font-size: 16px;
  color: #363636;
  display: inline-block;
`;
const FasterBuildFormationParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 0px;
  box-sizing: border-box;
  min-width: 493px;
  max-width: 100%;
  @media screen and (max-width: 1350px) {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
`;
const OnboardingpageDone3Icon = styled.img`
  height: 315px;
  width: 609px;
  position: relative;
  border-radius: 15px;
  object-fit: cover;
  max-width: 100%;
  @media screen and (max-width: 1350px) {
    flex: 1;
  }
`;
const ContentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 3px;
  box-sizing: border-box;
  max-width: 100%;
  gap: 20px;
  z-index: 1;
  text-align: left;
  font-size: 32px;
  color: #028cb5;
  font-family: Poppins;
  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;
  }
`;

const WelcomeMessage: NextPage = () => {
  return (
    <ContentRoot>
      <FasterBuildFormationParent>
        <FasterBuildFormation>60% Faster Build Formation</FasterBuildFormation>
        <ImagineAWorld>
          Imagine a world where every new team member reaches full productivity
          in record time. OnboardMe makes it a reality: personalized learning
          paths, instant access to rich resources, and a platform that grows
          with you.
        </ImagineAWorld>
      </FasterBuildFormationParent>
      <OnboardingpageDone3Icon
        loading="lazy"
        alt=""
        src="/onboardingpage-done-3@2x.png"
      />
    </ContentRoot>
  );
};

export default WelcomeMessage;
