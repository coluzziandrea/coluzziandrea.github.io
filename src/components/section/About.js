import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { skills } from "../../config";
import sr from "../../utils/sr";
import photo from "../../assets/images/me.jpg";

const StyledAbout = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--teal-400);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPicture = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--teal-400);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--yale-800);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--teal-400);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr(revealContainer.current);
  }, []);

  return (
    <StyledAbout id='about' ref={revealContainer}>
      <h2 className='section-heading'>About Me</h2>
      <div className='inner'>
        <StyledText>
          <div>
            <p>
              I'm a Software Engineer, living in Italy. I'm specializing in web development and open
              source.
            </p>
            <p>
              I have a Bachelor's degree in Computer Engineering earned at
              <a href='https://www.uniroma1.it/en'>'La Sapienza', University of Rome</a>.
            </p>
            <p>I Always Try to Keep Up With the Latest Technology Trends.</p>
            <p>
              I always try to find the best solutions for my tasks and the best way to implement
              them. I deeply care about building modules that suit the requirements and are
              re-usable in the future.
            </p>
            <p>
              I Love the Open Source Community and I'm contributing to{" "}
              <a href='https://github.com/coluzziandrea?tab=repositories&q=&type=fork&language=&sort='>
                some projects.
              </a>
            </p>
            <p>I like sharing work experiences with my colleagues and I love team work.</p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className='skills-list'>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPicture>
          <div className='wrapper'>
            <img className='img' src={photo} width={300} alt='Profile Picture' />
          </div>
        </StyledPicture>
      </div>
    </StyledAbout>
  );
};

export default About;
