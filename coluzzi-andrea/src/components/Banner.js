import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--teal-400);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--teal-600);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .short-about {
    margin-top: 30px;
  }
`;

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000); // 1 sec timeout
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hello, my name is</h1>;
  const two = <h2 className='big-heading'>Andrea Coluzzi</h2>;
  const three = <h3 className='big-heading'>I am a Web Developer.</h3>;
  const four = (
    <>
      <p className='short-about'>
        I am a Software Engineer who is passionate about techonology and problem solving. I am
        experienced in many software languages, methods and techniques.
      </p>
    </>
  );
  const five = (
    <a
      className='email-link'
      href='https://coluzziandrea.hashnode.dev/'
      target='_blank'
      rel='noreferrer'
    >
      Read My Blog
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames='fadeup' timeout={2000}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledSection>
  );
};

export default Banner;
