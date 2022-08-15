import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import Banner from "./components/Banner";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  return (
    <Layout>
      <StyledMainContainer className='fillHeight'>
        <Banner></Banner>
      </StyledMainContainer>
    </Layout>
  );
}

export default App;
