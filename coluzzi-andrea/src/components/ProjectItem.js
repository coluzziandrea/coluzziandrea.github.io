function ProjectItem({ title, picture, details, link }) {
  return (
    <div class='project-container project-card'>
      <img src={picture} alt={title} loading='lazy' class='project-pic' />
      <h3 class='project-title'>{title}</h3>
      <p class='project-details'>{details}</p>
      <a href={link} target='_blank' class='button-primary'>
        View
      </a>
    </div>
  );
}

export default ProjectItem;
