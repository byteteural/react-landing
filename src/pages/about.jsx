import React from 'react';
import cityImage from '../assets/images/city.avif';

export default function About() {
  return (
    <div className="bg-dark flex items-center justify-center h-screen px-8 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <img src={cityImage} alt="City" className="w-full rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-black text-3xl font-bold mb-4">เกี่ยวกับเรา</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            บริษัท เอ็น วี พี พร็อพเพอร์ตี้ จำกัด หรือ “NVP” ก่อตั้งขึ้นโดยทีมงานที่มีประสบการณ์สูง
            ในการบริหารจัดการอสังหาริมทรัพย์ ครอบคลุมอาคารสำนักงาน อาคารชุด หมู่บ้าน และเซอร์วิสอพาร์ทเม้นท์
            ทั้งในกรุงเทพมหานครและพื้นที่ปริมณฑล โดยมุ่งเน้นการให้คำปรึกษาและการบริหารจัดการระบบ
            อสังหาริมทรัพย์อย่างครบวงจร เพื่อให้บริการที่มีมาตรฐานสูงสุดและมีประสิทธิภาพตอบสนองความต้องการของลูกค้าในทุกมิติ
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            มุ่งมั่นเป็นบริษัทที่ให้บริการด้านการบริหารจัดการอสังหาริมทรัพย์และการดูแลอสังหาริมทรัพย์ ชั้นนำระดับประเทศ ในด้านระบบการจัดการที่มีมาตรฐานและมีประสิทธิภาพการดำเนินงาน โดยมีการเติบโตอย่างยั่งยืน
          </p>
        </div>
      </div>
    </div>

  );
}
