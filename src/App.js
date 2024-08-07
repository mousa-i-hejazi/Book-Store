import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero';
import Tracks from './components/tracks/Tracks';
import Experience from './components/experience/Experience';
import Students from './components/students/Students';
import Tracks2 from './components/tracks2/Tracks2';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Hero/>
      <Tracks/>
      <Experience/>
      <Students/>
      <Tracks2/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
