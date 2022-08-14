import React from "react";
import styled from "styled-components";
import Layout from "./components/layout";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  return (
    <Layout>
      <StyledMainContainer className='fillHeight'></StyledMainContainer>
    </Layout>
  );
}

export default App;
