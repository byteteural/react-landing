import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Customer from './pages/customer';
import Footer from './components/footer';

function App() {
  return (
    <div className='font-custom'>
      <div className="flex-grow">
        <section id="home" className="min-h-screen"><Home /></section>
        <section id="about" className="min-h-screen"><About /></section>
        <section id="service" className="min-h-screen"><Service /></section>
        <section id="customer" className="min-h-screen"><Customer /></section>
        <Footer />
      </div>
    </div>
  );
}
export default App;
