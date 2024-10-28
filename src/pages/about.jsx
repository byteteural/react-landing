import cityImage from '../assets/images/city.avif';

export default function About() {
  return (
    <div className="bg-dark flex items-center justify-center min-h-fit py-28 px-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 relative max-w-xl overflow-hidden bg-cover bg-no-repeat">
          <img src={cityImage} alt="City" className="w-full rounded-lg max-w-xl transition duration-300 ease-in-out hover:scale-110" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <div className='headAbout'>
            <h1 className='badge badge-neutral badge-lg font-bold text-lg text-gray-300 pr-2 opacity-75'>About us</h1>
            <h1 className="text-black text-xl font-bold mb-4 pt-2">เกี่ยวกับเรา</h1>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            บริษัท เอ็นวีพี พร็อพเพอร์ตี้ จำกัด หรือ “NVP” ก่อตั้งขึ้นโดยทีมงานที่มีประสบการณ์สูง
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
