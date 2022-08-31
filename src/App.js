// import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio'
import Contact from './components/Contact';
import Experience from './components/Experience'
import Skills from './components/Skills';

function App() {
  return (
    <main>
      <Bio />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Contact />
      <hr />
    </main>
  );
}

export default App;
