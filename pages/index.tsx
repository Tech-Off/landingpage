import type { NextPage } from "next";
import Footer from "../components/footer";
import styled from "styled-components";
import Frame2 from "../components/frame2";
import Frame3 from "../components/frame3";
import Frame1 from "../components/frame1";
import Frame4 from "../components/frame4";

const Container = styled.section`
  align-self: stretch;
  background-color: #e6f3f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 400px 0px 30px;
  box-sizing: border-box;
  gap: 30px 0px;
  max-width: 100%;
  flex-shrink: 0;
`;
const Page = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  gap: 10px 0px;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 60px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background: rgba(200,200,200,0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: #D1D6D9;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #929597;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

const PageNoGap = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0px;
`;

const LandingPage: NextPage = () => {
  return (
    <Page>
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <PageNoGap>
        <Frame4 />
        <Footer />
      </PageNoGap>
    </Page>
  );
};

export default LandingPage;
