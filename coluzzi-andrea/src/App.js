import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
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
