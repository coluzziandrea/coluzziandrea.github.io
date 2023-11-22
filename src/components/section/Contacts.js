import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { email } from '../../config'
import sr from '../../utils/sr'

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--teal-400);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`

const Contacts = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    sr(revealContainer.current)
  }, [])

  return (
    <StyledContactSection id='contact' ref={revealContainer}>
      <h2 className='section-heading overline'>Contact</h2>

      <h2 className='title'>Get In Touch</h2>

      <p>
        If you want to know more about me or my work, or if you would just like
        to say hello, send me a message. I&apos;d love to hear from you.
      </p>

      <a className='email-link' href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  )
}

export default Contacts
