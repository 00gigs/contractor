import './App.css';
import Navi from './Navbar';
import About from './About';
import Showcase from './Showcase';
import Qoute from './cta';
import Hero from './hero';
function App() {
  return (
    <div className="App">
      <Navi/>
      <br></br>
      <Hero/>
      <br></br>
      <About/>
      <Showcase/>
      <Qoute/>
    </div>
  );
}

export default App;
