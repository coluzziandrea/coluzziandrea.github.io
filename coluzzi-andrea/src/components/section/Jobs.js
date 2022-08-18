import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import sr from "../../utils/sr";

import { jobs } from "../../config";

const StyledJobs = styled.section`
  max-width: 900px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: 100%;
    margin-bottom: 30px;
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--yale-600);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? "var(--teal-400)" : "var(--ghost-500)")};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: var(--yale-700);
  }

  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 0 15px;
    border-left: 0;
    width: var(--tab-width);
    min-width: var(--tab-width);
    border-bottom: 2px solid var(--yale-700);
    text-align: center;
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--teal-500);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: var(--tab-width);
    max-width: var(--tab-width);
    height: 2px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--teal-400);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--ghost-500);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Jobs = () => {
  const revealContainer = useRef(null);
  const [activeTabId, setActiveTabId] = useState(0);

  useEffect(() => {
    sr(revealContainer.current);
  }, []);

  return (
    <StyledJobs id='jobs' ref={revealContainer}>
      <h2 className='section-heading'>Where I've Worked</h2>
      <div className='inner'>
        <StyledTabList role='tablist' aria-label='Job Tabs'>
          {jobs.map((job, i) => {
            return (
              <StyledTabButton
                key={i}
                isActive={activeTabId === i}
                onClick={() => setActiveTabId(i)}
                id={`tab-${i}`}
                role='tab'
                tabIndex={activeTabId === i ? "0" : "-1"}
                aria-selected={activeTabId === i ? true : false}
                aria-controls={`panel-${i}`}
              >
                {job.company}
              </StyledTabButton>
            );
          })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobs.map((job, i) => {
            return (
              <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames='fade'>
                <StyledTabPanel
                  id={`panel-${i}`}
                  role='tabpanel'
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}
                >
                  <h3>
                    <span>{job.title}</span>
                    <span className='company'>
                      &nbsp;@&nbsp;
                      <a href={job.url} className='inline-link'>
                        {job.company}
                      </a>
                    </span>
                  </h3>

                  <p className='range'>{job.range}</p>

                  <div>
                    <ul>
                      {job.bulletPoints.map((point) => {
                        return <li>{point}</li>;
                      })}
                    </ul>
                  </div>
                </StyledTabPanel>
              </CSSTransition>
            );
          })}
        </StyledTabPanels>
      </div>
    </StyledJobs>
  );
};

export default Jobs;
