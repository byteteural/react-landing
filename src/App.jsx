import './App.css';
import Home from './pages/home';
import Commitment from './pages/commit';
import About from './pages/about';
import Service from './pages/service';
import Customer from './pages/customer';
import Exp from './pages/experience';

function App() {
  return (
    <div className='font-custom'>
      <div className="flex-grow">
        <section id="home" className="min-h-fit"><Home /></section>
        <section id="about" className="min-h-fit"><About /></section>
        <section id="commitment" className="min-h-fit"><Commitment /></section>
        <section id="service" className="min-h-fit"><Service /></section>
        <section id="experience" className="min-h-fit"><Exp /></section>
        <section id="customer" className="min-h-fit"><Customer /></section>
      </div>
    </div>
  );
}
export default App;
