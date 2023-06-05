import React, { useState, useEffect } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import useScrollDirection from '../hooks/useScrollDirection';
import { navLinks } from '../config';
import Logo from './icons/Logo';
import Menu from './Menu';
import Icon from './icons/icon';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(3, 28, 53, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(3, 28, 53, 0.85);
        box-shadow: 0 10px 30px -10px var(--yale-900);
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--yale-900);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--ghost-500);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--teal-400);
      width: 42px;
      height: 42px;

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-sm);

      a {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        gap: 8px;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const LogoIcon = (
    <div className='logo' tabIndex='-1'>
      <a href='/' aria-label='home'>
        <Logo></Logo>
      </a>
    </div>
  );

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames='fade' timeout={1000}>
                {LogoIcon}
              </CSSTransition>
            )}
          </TransitionGroup>

          <StyledLinks>
            <ul>
              <TransitionGroup component={null}>
                {isMounted &&
                  navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <CSSTransition key={i} classNames='fadedown' timeout={1000}>
                      <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                        <a href={url}>
                          <Icon name={name}></Icon>
                          {name}
                        </a>
                      </li>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </ul>
          </StyledLinks>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames='fade' timeout={1000}>
                <Menu />
              </CSSTransition>
            )}
          </TransitionGroup>
        </>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
