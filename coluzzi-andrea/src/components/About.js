import software from '../assets/software.svg';

function About() {
  return (
    <>
      <section class='about' id='about'>
        <img src={software} className='about-img' alt='andrea-coluzzi' />

        <div class='bio'>
          <h2 class='bio-title'>About Me</h2>
          <p class='bio-text'>
            I am a Software Engineer who is passionate about techonology and
            problem solving. I am experienced in many software languages,
            methods and techniques.
          </p>
        </div>
      </section>
      <section class='more-about'>
        <h2>
          <span lang='en-US'> More About Me</span>
        </h2>
        <p>
          👩‍💻
          <span lang='en-US'>
            I'm a Software Engineer skilled in Back-End Web Applications, but I
            am improving my Front-End Development too.
          </span>
        </p>
        <p>
          🔥
          <span lang='en-US'>
            I Always Try to Keep Up With the Latest Technology Trends.
          </span>
        </p>
        <p>
          🔍
          <span lang='en-US'>
            I always try to find the best solutions for my tasks and the best
            way to implement them. I deeply care about building modules that
            suit the requirements and are re-usable in the future.
          </span>
        </p>
        <p>
          🌈
          <span lang='en-US'>
            I Love the Open Source Community and I'm contributing to some
            projects.
          </span>
        </p>
        <p>
          🤝
          <span lang='en-US'>
            I like sharing work experiences with my colleagues and I love team
            work.
          </span>
        </p>
      </section>
    </>
  );
}

export default About;
