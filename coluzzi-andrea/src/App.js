import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import Banner from "./components/section/Banner";
import About from "./components/section/About";
import Jobs from "./components/section/Jobs";
import Projects from "./components/section/Projects";
import OtherProjects from "./components/section/OtherProjects";
import Contacts from "./components/section/Contacts";

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
        <Projects></Projects>
        <OtherProjects></OtherProjects>
        <Contacts></Contacts>
      </StyledMainContainer>
    </Layout>
  );
}

export default App;
