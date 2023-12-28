import React from 'react'
import styled from 'styled-components'
import Layout from './components/Layout'
import Banner from './sections/Banner'
import About from './sections/About'
import Jobs from './sections/Jobs'
import Projects from './sections/Projects'
import Community from './sections/Community'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

function App() {
  return (
    <Layout>
      <StyledMainContainer className='fillHeight'>
        <Banner></Banner>
        <About></About>
        <Jobs></Jobs>
        <Community></Community>
        <Projects></Projects>
      </StyledMainContainer>
    </Layout>
  )
}

export default App
