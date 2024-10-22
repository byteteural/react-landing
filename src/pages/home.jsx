import Logo from '../assets/images/logo.png';
import mapBg from '../assets/images/world_map.png';
import { HashLink as Link } from 'react-router-hash-link';

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${mapBg})` }} className='bg-dark min-h-fit flex items-center justify-center py-36'>
      <div className="container text-center px-4 sm:px-8">
        <div className="row items-center justify-center">
          <div className="col mx-auto lg:w-8/12">
            <div>
              <img src={Logo} alt="NVP Property Logo" className="rounded-lg w-24 sm:w-32 md:w-48 mx-auto" loading="lazy" />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="flex display-4 letter-spacing-xs text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-tl from-orange-600 via-orange-500 to-orange-300 bg-clip-text text-transparent leading-normal font-sans">NVP</p>
              <p className="flex display-4 letter-spacing-xs text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 font-sans md:pl-6">PROPERTY</p>
            </div>
            <p className="mb-5 leading-6 text-muted text-slate-800 font-semibold text-sm sm:text-base md:text-lg">มุ่งมั่น สร้างสรรค์มี ประสิทธิภาพ</p>
            <div className="inline-flex flex-col md:flex-row justify-center gap-x-2 gap-y-3 mb-3">
              <Link smooth to="#about" className="btn btn-primary btn-md">about us ➔</Link>
              <Link smooth to="#contact" className="btn btn-md btn-info btn-outline">contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
