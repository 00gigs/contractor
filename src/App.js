import './App.css';
import Navi from './Navbar';
import About from './About';
import Showcase from './Showcase';
import Qoute from './cta';
import Hero from './hero';
import Footer from './footer';
import Services from './services';
function App() {
  return (
    <div className="App">
      <Navi/>
      <br></br>
      <Hero/>
      <br></br>
      <Services/>
      <About/>
      <br></br>
      <Showcase/>
      <Qoute/>
      <Footer/>
    </div>
  );
}

export default App;
