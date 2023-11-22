import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import sr from '../../utils/sr'
import Icon from '../icons/icon'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { otherProjects } from '../../config'

const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--yale-700);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--teal-400);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--ghost-500);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

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
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--ghost-500);
    font-size: var(--fz-xxl);

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

  .project-description {
    color: var(--ghost-500);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false)
  const revealTitle = useRef(null)
  const revealProjects = useRef([])

  useEffect(() => {
    sr(revealTitle.current)
    revealProjects.current.forEach((ref, i) => sr(ref, i * 100))
  }, [])

  const GRID_LIMIT = 2
  const firstProjects = otherProjects.slice(0, GRID_LIMIT)
  const projectsToShow = showMore ? otherProjects : firstProjects

  const projectInner = project => {
    const mainLink = project.link ? project.link : project.github

    return (
      <div className='project-inner'>
        <header>
          <div className='project-top'>
            <div className='folder'>
              <Icon name='Folder' />
            </div>
            <div className='project-links'>
              {project.github && (
                <a
                  href={project.github}
                  aria-label='GitHub Link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon name='GitHub' />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  aria-label='External Link'
                  className='external'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon name='External' />
                </a>
              )}
            </div>
          </div>

          <h3 className='project-title'>
            <a href={mainLink} target='_blank' rel='noreferrer'>
              {project.title}
            </a>
          </h3>

          <div
            className='project-description'
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
        </header>

        <footer>
          <ul className='project-tech-list'>
            {project.techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    )
  }

  return (
    <StyledProjects>
      <h2 ref={revealTitle}>Other Projects</h2>

      <ul className='projects-grid'>
        <TransitionGroup component={null}>
          {projectsToShow &&
            projectsToShow.map((project, i) => (
              <CSSTransition
                key={i}
                classNames='fadeup'
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}
              >
                <StyledProject
                  key={i}
                  ref={el => (revealProjects.current[i] = el)}
                  style={{
                    transitionDelay: `${
                      i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                    }ms`
                  }}
                >
                  {projectInner(project)}
                </StyledProject>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>

      <button className='more-button' onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjects>
  )
}

export default OtherProjects
