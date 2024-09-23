import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Customer from './pages/customer';
import bgImage from './assets/images/bgfinal.png';

function App() {
  return (
    <div className='font-custom'>
      <Navbar />
      <div>
        <img src={bgImage} alt="bg" className="fixed inset-0 w-full h-full object cover z-[-1] opacity-100" />
      </div>
      <div className="flex-grow">
        <section id="home" className="min-h-screen"><Home /></section>
        <section id="about" className="min-h-screen"><About /></section>
        <section id="service" className="min-h-screen"><Service /></section>
        <section id="customer" className="min-h-screen"><Customer /></section>
        <section id="contact" className="min-h-screen"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
