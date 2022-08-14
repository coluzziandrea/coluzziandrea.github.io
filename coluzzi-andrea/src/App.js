import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Sidebar from './components/Sidebar/Sidebar';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Sidebar />
      </main>

      <footer>
        <p class='copy'>
          &copy; Copyright 2022 <i>Coluzzi Andrea</i>
        </p>
      </footer>
    </>
  );
}

export default App;
