import ceoImg from '../assets/images/ceoImg.png';
import Logo from '../assets/images/logo.png';
import mapBg from '../assets/images/world_map.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${mapBg})` }}
      className="bg-dark bg-cover bg-center flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 py-4"
    >
      {/* Left Side */}
      <div className='flex justify-center max-w-7xl flex-col mx-auto'>
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between">
          <div className="mt-8">
            <img src={Logo} alt="NVP Property Logo" className="rounded-lg w-32 md:w-48 mx-auto lg:mx-0" loading="lazy" />
          </div>
          <div className="text-center lg:text-left mt-8">
            <h1 className="font-bold font-sans">
              <span className="text-6xl md:text-8xl bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent leading-normal">NVP</span>
              <span className="block text-4xl md:text-6xl text-gray-700">PROPERTY</span>
            </h1>
            <div className="mt-4 w-1/2 mx-auto lg:ml-0 h-2 bg-gradient-to-l from-orange-700 to-orange-500 rounded-md"></div>
            <div className="mt-6 font-semibold">
              <AnchorLink href="#contact" className="btn btn-info btn-sm text-slate-950 hover:text-gray-300">Contact</AnchorLink>
              <p className="flex justify-center lg:justify-start text-gray-800 pt-4 pb-2"><FaPhone className='mr-2' />02-149-9304 or 086-5547-966</p>
              <p className="flex justify-center lg:justify-start text-gray-800"><IoMailSharp className='mr-2' />E-mail: kisttisak66@gmail.com</p>
            </div>
          </div>
        </div>
      </div>


      {/* Right Side */}
      <div className='flex justify-center max-w-7xl flex-col mx-auto'>
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-orange-400">มุ่งมั่น</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">สร้างสรรค์</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">มีประสิทธิภาพ</h2>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={ceoImg} alt="CEO" className="rounded-lg w-full lg:w-4/6" loading="lazy" />
          </div>
          <div className="mt-8 lg:text-right">
            <p className="text-sm leading-relaxed">
              ก่อตั้งขึ้นโดยทีมงานที่มีประสบการณ์ในด้านบริหารจัดการอสังหาริมทรัพย์ เช่น
              อาคารสำนักงาน อาคารชุด หมู่บ้าน และเซอร์วิสอพาร์ทเม้นท์ ทั้งใน
              กรุงเทพฯ และปริมณฑล เพื่อตอบสนองความต้องการของลูกค้าแบบครบ
              วงจรในการดำเนินการให้คำปรึกษาด้านระบบการบริหารจัดการ
              อสังหาริมทรัพย์ที่มีมาตรฐานและมีประสิทธิภาพสูงสุด
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
