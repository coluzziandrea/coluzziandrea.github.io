import './Header.css';

function Header() {
  return (
    <nav>
      <h1>Coluzzi Andrea</h1>
      <ul class='navigation'>
        <li>
          <a href='#about' class='nav-link'>
            About
          </a>
        </li>
        <li>
          <a href='#skills' class='nav-link'>
            Skills
          </a>
        </li>
        <li>
          <a href='#projects' class='nav-link'>
            Projects
          </a>
        </li>
        <li>
          <a href='#contact' class='nav-link'>
            Contacts
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://coluzziandrea.hashnode.dev/'
            class='nav-link'
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
