import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProductThinking from './components/ProductThinking';
import SystemArchitecture from './components/SystemArchitecture';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <ProductThinking />
      <SystemArchitecture />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
