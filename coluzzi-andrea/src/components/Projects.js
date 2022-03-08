import dietisy from '../assets/projects/dietisy.png';
import bandTogether from '../assets/projects/bandTogether.png';
import ProjectItem from './ProjectItem';

const myProjects = [
  {
    title: 'Dietisy',
    picture: dietisy,
    details:
      'Android Application built for people who want to track their diet progresses. Dietisy is an application that allows you to constantly monitor your diet progress by monitoring your weight, body measurements and height.',
    link: 'https://play.google.com/store/apps/details?id=com.andreacoluzzi.dietisy',
  },
  {
    title: 'Band Together',
    picture: bandTogether,
    details:
      'Web Application implemented using the framework Ruby On Rails. Social Media that helps Musicians to find other people to build a Band and to manage events.',
    link: 'https://github.com/coluzziandrea/Band_Together',
  },
];

function Projects() {
  return (
    <section class='projects' id='projects'>
      <h2 class='projects-title'>My Recent Projects</h2>
      <div class='projects-container'>
        {myProjects.map((project) => {
          return (
            <ProjectItem
              title={project.title}
              picture={project.picture}
              details={project.details}
              link={project.link}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
