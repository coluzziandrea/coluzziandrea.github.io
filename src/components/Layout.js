import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/Theme'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <div id='root'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContent>
          <Header></Header>
          <Sidebar></Sidebar>
          <div id='content'>
            {children}
            <Footer></Footer>
          </div>
        </StyledContent>
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
