import type { NextPage } from "next";
import styled from "styled-components";

// Styles
const IconImage = styled.img`
  width: 609px;
  border-radius: 15px;
  object-fit: cover;
  @media (max-width: 1350px) {
    flex-grow: 1;
  }
`;

const HeadingText = styled.div`
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
  font-size: 1.625rem; // Base font size on larger screens
  @media (max-width: 800px) {
    font-size: 1.625rem; // Adjust if necessary
  }
  @media (max-width: 450px) {
    font-size: 1.1875rem; // Smaller font size on very small screens
  }
`;

const BodyText = styled.div`
  font-size: 1rem;
  color: #363636;
  display: inline-block;
  max-width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 0;
  box-sizing: border-box;
  width: 493px;
  @media (max-width: 1350px) {
    flex-grow: 1;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  z-index: 1;
  text-align: left;
  font-size: 2rem;
  color: #028cb5;
  font-family: Poppins;
  @media (max-width: 1350px) {
    flex-wrap: wrap;
    font-size: 1.5rem;
  }
`;

// Page component
const WelcomePage: NextPage = () => {
  return (
    <FlexContainer>
      <IconImage
        loading="lazy"
        alt="Descriptive alt text for the image"
        src="/onboardingpage-done-2@2x.png"
      />
      <ContentContainer>
        <HeadingText>60% Faster Build Formation</HeadingText>
        <BodyText>
          Imagine a world where every new team member reaches full productivity in record time. OnboardMe makes it a reality: personalized learning paths, instant access to rich resources, and a platform that grows with you.
        </BodyText>
      </ContentContainer>
    </FlexContainer>
  );
};

export default WelcomePage;
