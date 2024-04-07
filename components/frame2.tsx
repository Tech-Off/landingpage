import type { NextPage } from "next";
import styled from "styled-components";

const Baniere = styled.img`
  width: 100%;
  height: 100%;
`;
const Pipeline1Icon = styled.img`
  height: 349px;
  width: 675px;
  position: relative;
  border-radius: 15px;
  object-fit: cover;
  max-width: 100%;
  @media screen and (max-width: 1350px) {
    flex: 1;
  }
`;
const Title = styled.h3`
  margin: 0;
  width: 613px;
  height: 166px;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
  @media screen and (max-width: 450px) {
    font-size: 24px;
  }
`;
const Content = styled.b`
  width: 619px;
  height: 235px;
  position: relative;
  font-size: 24px;
  display: inline-block;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    font-size: 19px;
  }
`;
const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 619px;
  max-width: 100%;
  @media screen and (max-width: 1350px) {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    min-width: 100%;
  }
`;

const ContentBackground = styled.div`
  background: rgb(129,198,218);
  background: linear-gradient(90deg, rgba(129,198,218,1) 0%, rgba(2,140,181,1) 100%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
`;

const ImagineWorld = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  z-index: 1;
  max-width: 1402px;


  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;
  }
`;

const OnboardingPageDone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  width: 100%;
  color: #fff;
  position: relative;
  padding: 0px 0px 8px;

  flex-shrink: 0;

  text-align: left;
  font-size: 55px;
  font-family: Poppins;


`;

const Frame2: NextPage = () => {
  return (
    <OnboardingPageDone>
      <Baniere alt="" src="/topbaniere.svg" />
      <ContentBackground>
        <ImagineWorld>
          <Pipeline1Icon loading="lazy" alt="" src="/pipeline-1@2x.png" />
          <TextFrame>
            <Title>60% Faster Build Formation</Title>
            <Content>
              Imagine a world where every new team member reaches full
              productivity in record time. OnboardMe makes it a reality:
              personalized learning paths, instant access to rich resources, and
              a platform that grows with you.
            </Content>
          </TextFrame>
        </ImagineWorld>
      </ContentBackground>
      <Baniere alt="" src="/bottombaniere.svg" />
    </OnboardingPageDone>
  );
};

export default Frame2;
