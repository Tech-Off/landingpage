import type { NextPage } from "next";
import styled from "styled-components";


const InstantlyConnectYour = styled.p`
  margin: 0;
`;
const InstantlyConnectYourContainer = styled.h3`
  margin: 0;
  width: 100%;
  height: 150px;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  font-size: 36px;
`;
const GroupIcon = styled.img`
  width: 645px;
  height: 621.9px;
  position: relative;
  max-width: 100%;
`;
const OnboardingPageDone1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 60px 0px;
  max-width: 100%;
  text-align: center;
  color: #363636;
  @media screen and (max-width: 800px) {
    gap: 60px 0px;
  }
`;


const Frame3: NextPage = () => {
  return (
      <OnboardingPageDone1>
        <InstantlyConnectYourContainer>
          <InstantlyConnectYour>{`Instantly connect your documentation: `}</InstantlyConnectYour>
          <InstantlyConnectYour>
            Limitless integration for boundless intelligence
          </InstantlyConnectYour>
        </InstantlyConnectYourContainer>
        <GroupIcon loading="lazy" alt="" src="/imageframe3.jpg" />
      </OnboardingPageDone1>
  );
};

export default Frame3;
