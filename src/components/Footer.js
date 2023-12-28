import React from 'react'
import styled from 'styled-components'
import Icon from './icons/icon'
import { socialMedia } from '../config'

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0 auto 10px;
    color: var(--ghost-500);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

const StyledCredit = styled.div`
  color: var(--light-ghost);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex='-1'>
        <a href='https://github.com/coluzziandrea/coluzziandrea.github.io'>
          <div>Made with ❤ by Andrea Coluzzi</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  )
}

export default Footer
