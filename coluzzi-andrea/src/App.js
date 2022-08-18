import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import Banner from "./components/section/Banner";
import About from "./components/section/About";
import Jobs from "./components/section/Jobs";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  return (
    <Layout>
      <StyledMainContainer className='fillHeight'>
        <Banner></Banner>
        <About></About>
        <Jobs></Jobs>
      </StyledMainContainer>
    </Layout>
  );
}

export default App;
