import React from 'react';
import ceoImg from '../assets/images/ceoImg.png';
import Logo from '../assets/images/logo.png';
import mapBg from '../assets/images/world_map.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";


export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${mapBg})` }} className="bg-dark flex items-center justify-center h-screen px-8 py-4">
      {/* Left side */}
      <div className="w-1/2 p-8 flex flex-col justify-between">
        <div className="mt-8">
          <img src={Logo} alt="Houses" className="rounded-lg" />
        </div>
        <div>
          <div className="flex items-center mb-4">
            <h1 className="font-bold font-sans pl-40">
              <h1 className="text-8xl bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent leading-normal">NPV</h1>
              <h1 className="text-6xl text-gray-700">PROPERTY</h1>
            </h1>
          </div>
          <div className="flex items-center mb-4 ml-20 w-2/4 h-2 bg-gradient-to-l from-orange-700 to-orange-500 rounded-md">
          </div>
          <div className='pl-40'>
            <AnchorLink href="#contact" className="btn btn-info btn-sm text-slate-950 hover:text-gray-300">Contact</AnchorLink>
            <p className="flex text-gray-800 pt-4 pb-2"><FaPhone className='mr-2' />02-149-9304, 086-5547-966</p>
            <p className="flex text-gray-800"><IoMailSharp className='mr-2' />E-mail kisttisak66@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="w-1/2 p-8 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-orange-400">มุ่งมั่น</span>
          </h2>
          <h2 className="text-4xl font-bold mb-2">สร้างสรรค์</h2>
          <h2 className="text-4xl font-bold mb-6">มีประสิทธิภาพ</h2>
        </div>
        <div className="flex items-end justify-end">
          <img src={ceoImg} alt="CEO" className="rounded-lg w-4/6" />
        </div>
        <div className='text-4xl font-bold mb-2'>
          <p className="text-sm">
            ก่อตั้งขึ้นโดยทีมงานที่มีประสบการณ์ในด้านบริหารจัดการอสังหาริมทรัพย์
            เช่น อาคารสำนักงาน อาคารชุด หมู่บ้าน และเซอร์วิสอพาร์ทเม้นท์ ทั้งใน
            กรุงเทพฯ และปริมณฑล เพื่อตอบสนองความต้องการของลูกค้าแบบครบ
            วงจรในการดำเนินการให้คำปรึกษาด้านระบบการบริหารจัดการ
            อสังหาริมทรัพย์ที่มีมาตรฐานและมีประสิทธิภาพสูงสุด
          </p>
        </div>
      </div>
    </div>

  );
}
