import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/Theme";
import Loader from "./SplashLoader";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    setTimeout(() => {
      const el = document.getElementById("root");
      if (el) {
        el.scrollIntoView();
        el.focus();
      }
    }, 0);
  }, [isLoading]);

  return (
    <>
      <div id='root'>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          {isLoading ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <div id='content'>{children}</div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
