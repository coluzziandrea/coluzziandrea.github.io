import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import About from "./components/About";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  return (
    <Layout>
      <StyledMainContainer className='fillHeight'>
        <Banner></Banner>
        <About></About>
      </StyledMainContainer>
    </Layout>
  );
}

export default App;
