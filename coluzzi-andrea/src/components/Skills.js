function Skills() {
  return (
    <section class='skills' id='skills'>
      <h2 class='skill-header'>My Top Skills</h2>

      <div class='skills-wrapper'>
        <div class='third-set'>
          <img
            src='images/icons/java.svg'
            alt=''
            loading='lazy'
            class='icon icon-card'
          />
          <img
            src='images/icons/icons8-python.svg'
            alt='angular'
            loading='lazy'
            class='icon icon-card'
          />
          <img
            src='images/icons/spring.svg'
            alt=''
            loading='lazy'
            class='icon icon-card'
          />
        </div>
        <div class='first-set'>
          <img
            src='images/icons/icons8-html-5.svg'
            alt=''
            loading='lazy'
            class='icon icon-card'
          />
          <img
            src='images/icons/icons8-css3.svg'
            alt=''
            loading='lazy'
            class='icon icon-card'
          />
          <img
            src='images/icons/icons8-javascript.svg'
            alt=''
            loading='lazy'
            class='icon icon-card'
          />
        </div>

        <div class='fourth-set'>
          <img
            src='images/icons/icons8-typescript.svg'
            alt=''
            loading='lazy'
            class='icon icon-card'
          />
          <img
            src='images/icons/ruby.svg'
            alt='angular'
            loading='lazy'
            class='icon icon-card'
          />
          <img
            src='images/icons/docker.svg'
            alt=''
            loading='lazy'
            class='icon icon-card'
          />
        </div>
        <div class='second-set'>
          <img
            src='images/icons/android.svg'
            alt=''
            loading='lazy'
            class='icon icon-card'
          />
          <img
            src='images/icons/angular.svg'
            alt='angular'
            loading='lazy'
            class='icon icon-card'
          />
          <img
            src='images/icons/icons8-git.svg'
            alt=''
            loading='lazy'
            class='icon icon-card'
          />
        </div>
        <div class='sub-section'>
          To know more about me,
          <br />
          <a
            href='./resources/resume.pdf'
            target='_blank'
            class='button-primary'
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
