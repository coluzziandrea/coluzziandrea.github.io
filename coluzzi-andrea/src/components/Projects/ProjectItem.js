function ProjectItem({ title, picture, details, link }) {
  return (
    <a href={link} target='_blank' class='project-link'>
      <div class='project-container project-card'>
        <img src={picture} alt={title} loading='lazy' class='project-pic' />
        <h3 class='project-title'>{title}</h3>
        <p class='project-details'>{details}</p>
      </div>
    </a>
  );
}

export default ProjectItem;
