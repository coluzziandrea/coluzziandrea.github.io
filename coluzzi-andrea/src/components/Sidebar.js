import up from '../assets/icons/up.png';

const scrollTop = () => {
  window.scrollTo(0, 0);
};

function Sidebar() {
  return (
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
          alt='Blog Hashnode'
          class='socicon'
        />
      </a>
      <a href='https://medium.com/@coluzziandrea/about' target='_blank'>
        <img
          src='images/icons/icons8-logo-medio-50.png'
          alt='Blog Medium'
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
      <i class='scroll-up' id='scroll-up' onClick={scrollTop}>
        <img src={up} class='socicon up-arrow' alt='scroll-up' />
      </i>
    </div>
  );
}

export default Sidebar;
