import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import sr from '../utils/sr'
import Icon from '../components/icons/icon'
import communityImages from '../components/communityImages'

const StyledCommunity = styled.section``

const StyledCommunityGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`

const StyledCommunityElement = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--teal-400);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--ghost-500);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--ghost-500);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--yale-700);
    color: var(--ghost-500);
    font-size: var(--fz-lg);
    font-weight: 100;

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--ghost-500);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--ghost-500);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--ghost-500);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--ghost-500);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--teal-400);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--teal-700);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      width: 579px;

      @media (max-width: 768px) {
        object-fit: cover;
        max-width: 100%;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`

const Community = () => {
  const revealTitle = useRef(null)
  const revealProjects = useRef([])

  const communities = [
    {
      title: 'Latina In Tech',
      category: 'Local IT Community',
      image: 'lit',
      html: 'In Jan 2023 I founded Latina In Tech (LiT), which is a tech community based in Latina, Italy, our purpose is to create a network of local IT professionals. Follow us on our website!',
      link: 'https://latina-in-tech.github.io/',
      github: 'https://github.com/latina-in-tech',
      tags: ['Community', 'Meetup', 'Latina', 'Local Community']
    }
  ]

  useEffect(() => {
    sr(revealTitle.current)
    revealProjects.current.forEach((ref, i) => sr(ref, i * 100))
  }, [])

  return (
    <StyledCommunity id='community'>
      <h2 className='section-heading'>Community</h2>

      <StyledCommunityGrid>
        {communities.map((community, i) => {
          return (
            <StyledCommunityElement
              key={i}
              ref={el => {
                revealProjects.current[i] = el
              }}
            >
              <div className='project-content'>
                <div>
                  <p className='project-overline'>{community.category}</p>
                  <h3 className='project-title'>
                    <a href={community.link}>{community.title}</a>
                  </h3>

                  <div
                    className='project-description'
                    dangerouslySetInnerHTML={{ __html: community.html }}
                  ></div>

                  <ul className='project-tech-list'>
                    {community.tags.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>

                  <div className='project-links'>
                    <a href={community.github} aria-label='GitHub Link'>
                      <Icon name='GitHub' />
                    </a>
                    <a
                      href={community.link}
                      aria-label='External Link'
                      className='external'
                    >
                      <Icon name='External' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='project-image'>
                <a href={community.link}>
                  <img
                    src={communityImages[community.image]}
                    alt={community.image}
                    className='img'
                  />
                </a>
              </div>
            </StyledCommunityElement>
          )
        })}
      </StyledCommunityGrid>
    </StyledCommunity>
  )
}

export default Community
