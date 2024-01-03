import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navi from './Navbar';
import About from './About';
import Showcase from './Showcase';
import Qoute from './cta';
import Hero from './hero';
import Footer from './footer';
import Services from './services';
import ShowNewhomes from './newhomes';
import Book from './Book'
import ShowFloorPlans from './FloorPlans'
import ShowRenovation from './Renovation'
import ShowPortfolio from './Portfolio'
import ShowServices from './servicesPage'


function Layout({ children }) {
  return (
    <div className="App">
      <Navi />
      {children}
      <Footer />
    </div>
  );
}




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <br></br>
            <Services />
            <br></br>
            <About />
            <br></br>
            <Showcase />
            <Qoute />
          </Layout>
        }/>
      <Route path="/newhomes" element={<Layout><ShowNewhomes /></Layout> } />
      <Route path="/Renovation" element={<Layout><ShowRenovation /></Layout> } />
      <Route path="/Portfolio" element={<Layout><ShowPortfolio /></Layout> } />
      <Route path="/FloorPlans" element={<Layout><ShowFloorPlans /></Layout> } />
      <Route path="/services" element={<Layout><ShowServices /></Layout> } />
      <Route path="/book" element={<Layout><Book /></Layout> } />
    </Routes>
    </BrowserRouter >
  );
}

export default App;
