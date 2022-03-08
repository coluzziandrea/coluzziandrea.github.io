import up from '../../assets/icons/up.png';
import github from '../../assets/icons/github.png';
import hashnode from '../../assets/icons/hashnode.png';
import linkedin from '../../assets/icons/linkedin.png';
import medium from '../../assets/icons/medium.png';
import twitter from '../../assets/icons/twitter.png';
import whatsapp from '../../assets/icons/whatsapp.png';

import './Sidebar.css';

const renderSocial = (icon, alt, link) => {
  return (
    <a href={link} target='_blank'>
      <img src={icon} alt={alt} loading='lazy' class='socicon' />
    </a>
  );
};

const mySocials = [
  {
    icon: twitter,
    alt: 'Twitter',
    link: 'https://twitter.com/acidevil94',
  },
  {
    icon: linkedin,
    alt: 'Linkedin',
    link: 'https://www.linkedin.com/in/andrea-coluzzi/',
  },
  {
    icon: github,
    alt: 'github',
    link: 'https://github.com/coluzziandrea',
  },
  {
    icon: hashnode,
    alt: 'hashnode',
    link: 'https://hashnode.com/@coluzziandrea',
  },
  {
    icon: medium,
    alt: 'medium',
    link: 'https://medium.com/@coluzziandrea/about',
  },
  {
    icon: whatsapp,
    alt: 'whatsapp',
    link: 'https://api.whatsapp.com/send/?phone=393402494287&text=Hi%20Andrea%2C%0AI%20wanted%20to%20talk%20to%20you%20about%20a%20project%20I%20had%20in%20mind%20to%20develop.%20I%20think%20you%20are%20the%20right%20person.&app_absent=0',
  },
];

function Sidebar() {
  return (
    <div class='socials'>
      {mySocials.map((social) => {
        return renderSocial(social.icon, social.alt, social.link);
      })}

      <i class='scroll-up' id='scroll-up' onClick={() => window.scrollTo(0, 0)}>
        <img src={up} class='socicon up-arrow' alt='scroll-up' />
      </i>
    </div>
  );
}

export default Sidebar;
