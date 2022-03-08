import software from '../../assets/software.svg';
import './About.css';

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
        <h2>More About Me</h2>
        <p>
          👩‍💻 I'm a Software Engineer skilled in Back-End Web Applications, but I
          am improving my Front-End Development too.
        </p>
        <p>🔥 I Always Try to Keep Up With the Latest Technology Trends.</p>
        <p>
          🔍 I always try to find the best solutions for my tasks and the best
          way to implement them. I deeply care about building modules that suit
          the requirements and are re-usable in the future.
        </p>
        <p>
          🌈 I Love the Open Source Community and I'm contributing to some
          projects.
        </p>
        <p>
          🤝 I like sharing work experiences with my colleagues and I love team
          work.
        </p>
      </section>
    </>
  );
}

export default About;
