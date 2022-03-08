import android from '../assets/skills/android.svg';
import angular from '../assets/skills/angular.svg';
import docker from '../assets/skills/docker.svg';
import css from '../assets/skills/css.svg';
import git from '../assets/skills/git.svg';
import html from '../assets/skills/html.svg';
import javascript from '../assets/skills/javascript.svg';
import python from '../assets/skills/python.svg';
import kotlin from '../assets/skills/kotlin.svg';
import typescript from '../assets/skills/typescript.svg';
import react from '../assets/skills/react.svg';
import rxjs from '../assets/skills/rxjs.svg';
import nodejs from '../assets/skills/nodejs.svg';
import firebase from '../assets/skills/firebase.svg';

import resume from '../assets/docs/resume.pdf';

const renderItem = (src, title) => {
  return <img src={src} alt={title} loading='lazy' class='icon icon-card' />;
};

const mySkills = [
  {
    src: angular,
    title: 'angular',
  },
  {
    src: react,
    title: 'react',
  },
  {
    src: html,
    title: 'html',
  },
  {
    src: css,
    title: 'css',
  },
  {
    src: javascript,
    title: 'javascript',
  },
  {
    src: typescript,
    title: 'typescript',
  },
  {
    src: rxjs,
    title: 'rxjs',
  },
  {
    src: git,
    title: 'git',
  },
  {
    src: docker,
    title: 'docker',
  },

  {
    src: kotlin,
    title: 'kotlin',
  },

  {
    src: python,
    title: 'python',
  },
  {
    src: nodejs,
    title: 'nodejs',
  },
  {
    src: android,
    title: 'Android',
  },
  {
    src: firebase,
    title: 'firebase',
  },
];

function Skills() {
  return (
    <section class='skills' id='skills'>
      <h2 class='skill-header'>My Skills</h2>

      <div class='skills-wrapper'>
        {mySkills.map((skill) => {
          return renderItem(skill.src, skill.title);
        })}

        <div class='sub-section'>
          To know more about me,
          <br />
          <a href={resume} target='_blank' class='button-primary'>
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
