import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {

    return <div>
        <Header />
        <Hero />
        <Projects />
        <AboutMe />
        <Skills />
        <Contact />
    </div>
}

export default App;