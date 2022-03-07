import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;

/*



      

        
        <section class='projects' id='projects'>
          <h2 class='projects-title'>
            <span lang='en-US'>Some of my Recent Projects</span>
            <span lang='it-IT'>Alcuni dei miei progetti recenti</span>
          </h2>
          <div class='projects-container'>
            <div class='project-container project-card'>
              <img
                src='images/projects/dietisy.png'
                alt='Dietisy'
                loading='lazy'
                class='project-pic'
              />
              <h3 class='project-title'>Dietisy</h3>
              <p class='project-details'>
                <span lang='en-US'>
                  Android Application built for people who want to track their
                  diet progresses.
                </span>
                <span lang='it-IT'>
                  Applicazione Android creata per le persone che desiderano
                  monitorare i progressi della propria dieta.
                </span>
              </p>
              <p>
                <span lang='en-US'>
                  Dietisy is an application that allows you to constantly
                  monitor your diet progress by monitoring your weight, body
                  measurements and height.
                </span>
                <span lang='it-IT'>
                  Dietisy è un'applicazione che ti permette di monitorare
                  costantemente i tuoi progressi nella dieta monitorando il tuo
                  peso, le misure corporee e l'altezza.
                </span>
              </p>
              <a
                href='https://play.google.com/store/apps/details?id=com.andreacoluzzi.dietisy'
                target='_blank'
                class='button-primary'
              >
                <span lang='en-US'>Check it Out</span>
                <span lang='it-IT'>Visualizza</span>
              </a>
            </div>
            <div class='project-container project-card'>
              <img
                src='images/projects/bandTogether.png'
                alt='Band Together'
                loading='lazy'
                class='project-pic'
              />
              <h3 class='project-title'>Band Together</h3>
              <p class='project-details'>
                <span lang='en-US'>
                  Web Application implemented using the framework Ruby On Rails.
                </span>
                <span lang='it-IT'>
                  Applicazione Web implementata utilizzando il framework Ruby On
                  Rails.
                </span>
              </p>
              <p>
                <span lang='en-US'>
                  Social Media that helps Musicians to find other people to
                  build a Band and to manage events
                </span>
                <span lang='it-IT'>
                  Social Media che aiuta i Musicisti a trovare altre persone per
                  formare una Band e gestire eventi
                </span>
              </p>
              <a
                href='https://github.com/coluzziandrea/Band_Together'
                target='_blank'
                class='button-primary'
              >
                <span lang='en-US'>Check it Out</span>
                <span lang='it-IT'>Visualizza</span>
              </a>
            </div>
          </div>
        </section>
        <section class='support'>
          <h2 class='support-title'>
            <span lang='en-US'>Support My Work</span>
            <span lang='it-IT'>Supporta il Mio Lavoro</span>
          </h2>
          <div class='support-content'>
            <a
              class='button-primary'
              href='https://www.buymeacoffee.com/coluzziandrea'
              target='_blank'
            >
              Buy Me a Coffee
            </a>
          </div>
        </section>
        <section class='contact' id='contact'>
          <h2>
            <span lang='en-US'>Get In Touch With Me</span>
            <span lang='it-IT'>Mettiti in Contatto Con Me</span>
          </h2>
          <div class='contact-form-container'>
            <div class='contact-form'>
              <form action='https://formspree.io/f/xjvjzjyv' method='POST'>
                <div class='form-control'>
                  <label for='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='_replyto'
                    placeholder='Enter Your Email'
                    class='input-field'
                    required
                  />
                </div>
                <div class='form-control'>
                  <label for='message'>
                    <span lang='en-US'>Message</span>
                    <span lang='it-IT'>Messaggio</span>
                  </label>
                  <textarea
                    id='message'
                    cols='60'
                    rows='10'
                    placeholder='Enter Your Message'
                    name='message'
                    class='input-field'
                    required
                  ></textarea>
                </div>
                <input type='submit' id='submit-btn' class='submit-btn'>
                  {' '}
                </input>
              </form>
            </div>
          </div>
        </section>
        <div class='socials'>
          <a href='https://twitter.com/acidevil94' target='_blank'>
            <img
              src='images/icons/icons8-twitter-48.png'
              alt='Twitter'
              loading='lazy'
              class='socicon'
            />
          </a>
          <a href='https://www.linkedin.com/in/andrea-coluzzi/' target='_blank'>
            <img
              src='images/icons/icons8-linkedin-48.png'
              alt='Linkedin'
              loading='lazy'
              class='socicon'
            />
          </a>
          <a href='https://github.com/coluzziandrea' target='_blank'>
            <img
              src='images/icons/icons8-github-30.png'
              alt='Github'
              class='socicon'
            />
          </a>
          <a href='https://hashnode.com/@coluzziandrea' target='_blank'>
            <img
              src='images/icons/icons8-hashnode-48.png'
              alt='Blog'
              class='socicon'
            />
          </a>
          <a href='https://medium.com/@coluzziandrea/about' target='_blank'>
            <img
              src='images/icons/icons8-logo-medio-50.png'
              alt='Blog'
              class='socicon'
            />
          </a>
          <a
            href='https://api.whatsapp.com/send/?phone=393402494287&text=Hi%20Andrea%2C%0AI%20wanted%20to%20talk%20to%20you%20about%20a%20project%20I%20had%20in%20mind%20to%20develop.%20I%20think%20you%20are%20the%20right%20person.&app_absent=0'
            target='_blank'
            lang='en-US'
          >
            <img
              src='images/icons/icons8-whatsapp-48.png'
              alt='WhatsApp'
              class='socicon'
            />
          </a>
          <a
            href='https://api.whatsapp.com/send/?phone=393402494287&text=Ciao%20Andrea%2C%0AVorrei%20parlarti%20di%20un%20progetto%20che%20avevo%20in%20mente%20di%20sviluppare.%20Penso%20che%20tu%20saresti%20la%20persona%20giusta.&app_absent=0'
            target='_blank'
            lang='it-IT'
          >
            <img
              src='images/icons/icons8-whatsapp-48.png'
              alt='WhatsApp'
              class='socicon'
            />
          </a>
        </div>
        <i class='scroll-up' id='scroll-up'>
          <img
            src='images/icons/icons8-up-48.png'
            class='socicon up-arrow'
            alt='scroll-up'
          />
        </i>
        <footer>
          <p class='copy'>
            &copy; Copyright 2022 <i>Coluzzi Andrea</i>
          </p>
        </footer>
*/
